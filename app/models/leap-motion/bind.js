module.exports = function (elm, evt, f) {
  if (elm.addEventListener) {
    elm.addEventListener(evt, f, false);
  } else if (elm.attachEvent) {
    elm.attachEvent('on' + evt, f);
  }
}
