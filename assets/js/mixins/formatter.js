export default {
  data: function () {
    return {
      fmtLimit: 1000,
      fmtDigits: 1,
    };
  },
  methods: {
    round: function (num, precision) {
      var base = 10 ** precision;
      return (Math.round(num * base) / base).toFixed(precision);
    },
    fmt: function (val) {
      if (val === undefined || val === null) {
        return 0;
      }
      val = Math.abs(val);
      return val >= this.fmtLimit ? this.round(val / 1e3, this.fmtDigits) : this.round(val, 0);
    },
    fmtUnit: function (val) {
      return Math.abs(val) >= this.fmtLimit ? "k" : "";
    },
    fmtDuration: function (d) {
      if (d <= 0 || d == null) {
        return "—";
      }
      var seconds = "0" + (d % 60);
      var minutes = "0" + (Math.floor(d / 60) % 60);
      var hours = "" + Math.floor(d / 3600);
      if (hours.length < 2) {
        hours = "0" + hours;
      }
      return hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    },
    fmtShortDuration: function (d) {
      if (d <= 0 || d == null) {
        return "—";
      }
      var minutes = Math.floor(d / 60) % 60;
      var hours = Math.floor(d / 3600);
      var tm;
      if (hours >= 1) {
        minutes = "0" + minutes;
        tm = hours + ":" + minutes.substr(-2);
      } else {
        var seconds = "0" + (d % 60);
        tm = minutes + ":" + seconds.substr(-2);
      }
      return tm;
    },
    fmtShortDurationUnit: function (d) {
      if (d <= 0 || d == null) {
        return "";
      }
      var hours = Math.floor(d / 3600);
      if (hours >= 1) {
        return "h";
      }
      return "m";
    },
    getVisLink: function () {
      let url =
        document.location.origin.replace("2020", 2021).replace("sunny5", "vis.sunny5") +
        "/vis/#EVCCMOBILE";
      let strLink = `<a class="nav-item nav-link pb-1" href="${url}">VIS-mobile</a>`;
      return strLink;
    },
    getLoginLink: function () {
      if (document.location.href.indexOf("auth=1") > -1) {
        return `<a class="nav-item nav-link pb-1" href="../smartbox/logout">Logout</a>`;
      } else {
        return `<a class="nav-item nav-link pb-1" href="../smartbox/login">Login</a>`;
      }
    },
    hasSunny5Menu: function () {
      return window.evcc.hasSunny5Menu == 'true';
    },
    fmtAbsoluteDate: function (date) {
      return new Intl.DateTimeFormat("de-DE", {
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
      }).format(date);
    },
    fmtRelativeTime: function (date) {
      var units = {
        year: 24 * 60 * 60 * 1000 * 365,
        month: (24 * 60 * 60 * 1000 * 365) / 12,
        day: 24 * 60 * 60 * 1000,
        hour: 60 * 60 * 1000,
        minute: 60 * 1000,
        second: 1000,
      };

      var rtf = new Intl.RelativeTimeFormat("de", { numeric: "auto", style: "narrow" });

      var getRelativeTime = (d1, d2 = new Date()) => {
        var elapsed = d1 - d2;

        // "Math.abs" accounts for both "past" & "future" scenarios
        for (var u in units)
          if (Math.abs(elapsed) > units[u] || u == "second")
            return rtf.format(Math.round(elapsed / units[u]), u);
      };
      return getRelativeTime(date);
    },
  },
};
