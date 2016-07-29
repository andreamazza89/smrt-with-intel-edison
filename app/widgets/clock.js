(function(exports){

  const HOUR = 3600000; //one hour in milliseconds

  var timezones = {
    london:  0,
    rome:    1
  };

  function displayTime() {
    var timeZone = $("#clock-widget .inner").data('timezone');
    var currentTime = new Date();
    currentTime.setTime(currentTime.getTime() + (HOUR * timezones[timeZone]));

    var hours   = twoDigitsZeroPadding(currentTime.getHours());
    var minutes = twoDigitsZeroPadding(currentTime.getMinutes());
    var seconds = twoDigitsZeroPadding(currentTime.getSeconds());

    var year    = (currentTime.getFullYear()).toString();
    var month   = (currentTime.getMonth() + 1).toString();
    var day     = (currentTime.getDate()).toString();

    var offsetTime = hours + ':' + minutes + ':' + seconds;
    var offsetDate = year + '-' + month + '-' + day;

    $("#clock-widget .inner").html('<p>' + timeZone  + '</p>' + '<br>' + '<h1>' + offsetTime + '</h1>' + '<br>' + '<p>' + offsetDate + '</p>')
  };

  function twoDigitsZeroPadding(number) {
    number = number.toString();
    if (number.length < 2) {
      return "0" + number
    } else {
      return number
    }
  };

  function init() {
    'use strict';

    // Update time every second
    setInterval(function() {
      displayTime('london');
    }, 1000);
  };

  exports.init = init;

})(this);
