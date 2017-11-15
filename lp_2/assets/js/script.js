if ("vibrate" in navigator) {
  navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
  navigator.vibrate([1000]);
}

function goto() {
  location.href = "http://you.goouturl.com/click"
}
