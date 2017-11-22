navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
if (navigator.vibrate) {
  navigator.vibrate([1000, 500, 1000, 500, 1000, 500]);
}

function getURLParameter(e) {
  var t = decodeURI((RegExp(e + "=(.+?)(&|$)").exec(location.search) || [, null])[1] || "");
  return "brand" === e & !t && (t = "mobile"), "model" === e & !t && (t = "device"), t
}

function hidepop() {
  document.getElementById('popup1').style.display = "none";
}

function showpop() {
  document.getElementById('popup1').style.display = "block";
}
