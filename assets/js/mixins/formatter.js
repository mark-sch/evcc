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
    fmtDayString: function (date) {
      const YY = `${date.getFullYear()}`;
      const MM = `${date.getMonth() + 1}`.padStart(2, "0");
      const DD = `${date.getDate()}`.padStart(2, "0");
      return `${YY}-${MM}-${DD}`;
    },
    fmtTimeString: function (date) {
      const HH = `${date.getHours()}`.padStart(2, "0");
      const mm = `${date.getMinutes()}`.padStart(2, "0");
      return `${HH}:${mm}`;
    },
    fmtAbsoluteDate: function (date) {
      return new Intl.DateTimeFormat("default", {
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
      }).format(date);
    },
  },
};
