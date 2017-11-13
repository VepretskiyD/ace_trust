(function() {
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
