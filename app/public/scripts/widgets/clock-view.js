var strftime = require('strftime');

(function(exports){
  function getTime(time, format) {
    if (format === '12-hour') {
      return '<span>' + strftime('%l:%M', time) + '</span><span>' + strftime(':%S', time) + '</span><span>' + strftime('%P', time) + '</span>';
    }
    return strftime('%H:%M:%S', time);
  }

  function getDate(time) {
    return '<span>' + strftime('%A', time) + '</span> <span>' + strftime('%o %B', time) + '</span>';
  }

  function updateAnalogClock(now, el) {
    $(el).find('.hour').css({ transform: 'rotate(' + (360 / 12) * (now.getHours() + (now.getMinutes() * 1/60)) + 'deg)' });
    $(el).find('.minute').css({ transform: 'rotate(' + (360 / 60) * now.getMinutes() + 'deg)' });
    $(el).find('.second').css({ transform: 'rotate(' + (360 / 60) * now.getSeconds() + 'deg)' });
  }

  function twoDigitsZeroPadding(number) {
    stringyNumber = number.toString();
    if (stringyNumber.length < 2) {
      return "0" + stringyNumber;
    } else {
      return stringyNumber;
    }
  }

  exports.getTime = getTime;
  exports.getDate = getDate;
  exports.updateAnalogClock = updateAnalogClock;

})(this);
