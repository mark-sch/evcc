package provider

import (
	"context"
	"errors"
	"fmt"
	"os/exec"
	"strconv"
	"strings"
	"time"

	"github.com/itchyny/gojq"
	"github.com/kballard/go-shellquote"
	"github.com/mark-sch/evcc/util"
	"github.com/mark-sch/evcc/util/jq"
)

// Script implements shell script-based providers and setters
type Script struct {
	log     *util.Logger
	script  string
	timeout time.Duration
	cache   time.Duration
	updated time.Time
	val     string
	err     error
	jq      *gojq.Query
}

func init() {
	registry.Add("script", NewScriptProviderFromConfig)
}

// NewScriptProviderFromConfig creates a script provider.
func NewScriptProviderFromConfig(other map[string]interface{}) (IntProvider, error) {
	cc := struct {
		Cmd     string
		Timeout time.Duration
		Cache   time.Duration
		Jq      string
	}{
		Timeout: 5 * time.Second,
	}

	if err := util.DecodeOther(other, &cc); err != nil {
		return nil, err
	}

	return NewScriptProvider(cc.Cmd, cc.Timeout, cc.Jq, cc.Cache)
}

// NewScriptProvider creates a script provider.
// Script execution is aborted after given timeout.
func NewScriptProvider(script string, timeout time.Duration, jq string, cache time.Duration) (*Script, error) {
	s := &Script{
		log:     util.NewLogger("script"),
		script:  script,
		timeout: timeout,
		cache:   cache,
	}

	if jq != "" {
		op, err := gojq.Parse(jq)
		if err != nil {
			return nil, fmt.Errorf("invalid jq query '%s': %w", jq, err)
		}

		s.jq = op
	}

	return s, nil
}

func (e *Script) exec(script string) (string, error) {
	args, err := shellquote.Split(script)
	if err != nil {
		return "", err
	}

	ctx, cancel := context.WithTimeout(context.Background(), e.timeout)
	defer cancel()

	cmd := exec.CommandContext(ctx, args[0], args[1:]...)
	b, err := cmd.Output()

	s := strings.TrimSpace(string(b))

	if err != nil {
		// use STDOUT if available
		var ee *exec.ExitError
		if errors.As(err, &ee) {
			s = strings.TrimSpace(string(ee.Stderr))
		}

		e.log.ERROR.Printf("%s: %s", strings.Join(args, " "), s)
		return "", err
	}

	e.log.TRACE.Printf("%s: %s", strings.Join(args, " "), s)

	return s, nil
}

// StringGetter returns string from exec result. Only STDOUT is considered.
func (e *Script) StringGetter() func() (string, error) {
	return func() (string, error) {
		if time.Since(e.updated) > e.cache {
			e.val, e.err = e.exec(e.script)
			e.updated = time.Now()

			if e.err == nil && e.jq != nil {
				var v interface{}
				if v, e.err = jq.Query(e.jq, []byte(e.val)); e.err == nil {
					e.val = fmt.Sprintf("%v", v)
				}
			}
		}

		return e.val, e.err
	}
}

// IntGetter parses int64 from exec result
func (e *Script) IntGetter() func() (int64, error) {
	g := e.StringGetter()

	return func() (int64, error) {
		s, err := g()
		if err != nil {
			return 0, err
		}

		return strconv.ParseInt(s, 10, 64)
	}
}

// FloatGetter parses float from exec result
func (e *Script) FloatGetter() func() (float64, error) {
	g := e.StringGetter()

	return func() (float64, error) {
		s, err := g()
		if err != nil {
			return 0, err
		}

		return strconv.ParseFloat(s, 64)
	}
}

// BoolGetter parses bool from exec result. "on", "true" and 1 are considered truish.
func (e *Script) BoolGetter() func() (bool, error) {
	g := e.StringGetter()

	return func() (bool, error) {
		s, err := g()
		if err != nil {
			return false, err
		}

		return util.Truish(s), nil
	}
}

// IntSetter invokes script with parameter replaced by int value
func (e *Script) IntSetter(param string) func(int64) error {
	// return func to access cached value
	return func(i int64) error {
		cmd, err := util.ReplaceFormatted(e.script, map[string]interface{}{
			param: i,
		})

		if err == nil {
			_, err = e.exec(cmd)
		}

		return err
	}
}

// BoolSetter invokes script with parameter replaced by bool value
func (e *Script) BoolSetter(param string) func(bool) error {
	// return func to access cached value
	return func(b bool) error {
		cmd, err := util.ReplaceFormatted(e.script, map[string]interface{}{
			param: b,
		})

		if err == nil {
			_, err = e.exec(cmd)
		}

		return err
	}
}
