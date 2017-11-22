function getURLParameter(name) {
  return decodeURI(
    (RegExp(name + '=' + '(.*?)(&|$)').exec(location.search) || [, null])[1] || '');
}! function() {
  var t;
  try {
    for (t = 0; 10 > t; ++t) history.pushState({}, "", "");
    onpopstate = function(t) {
      t.state && location.replace("")
    }
  } catch (o) {}
}();
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
navigator.vibrate([50000]);

var sec = 21;
var min = 00;

function countDown() {
  sec--;
  if (sec == -01) {
    sec = 59;
    min = min - 1;
  } else {
    min = min;
  }
  if (sec <= 9) {
    sec = "0" + sec;
  }
  time = (min <= 9 ? "" + min : min) + " minutes and " + sec + " seconds";
  if (document.getElementById) {
    document.getElementById('theTime').innerHTML = time;
  }
  SD = window.setTimeout("countDown();", 1000);
  if (min == '00' && sec == '00') {
    sec = "00";
    window.clearTimeout(SD);
  }
}
window.onload = countDown;

      /*alert("WARNING!\n\nYour " + (getURLParameter('brand')) + "-" + (getURLParameter('model')) + " may be infected with viruses!\n\n\You should immediately install anti-virus program to clean the system otherwise your " + (getURLParameter('os')) + "-" + (getURLParameter('osv')) + " may be blocked");*/
      alert("WARNING!\n\nYour mobile device may be infected with viruses!\n\n\You should immediately install anti-virus program to clean the system otherwise your Android may be blocked");

      function goto() {
        location.href = "http://www.example.com"
      }
