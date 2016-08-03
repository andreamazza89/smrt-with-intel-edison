var strftime = require('strftime');

(function(exports){
  function getTime(time, format) {
    if (format === '12-hour') {
      return '<span>' + strftime('%l:%M', time) + '</span><div style="display: inline-block; margin-left: 5px"><span class="seconds">' + strftime(':%S', time) + ' </span><span class="seconds">' + strftime('%P', time) + '</span></div>';
    }
    return '<span>' + strftime('%H:%M', time) + '</span><div style="display: inline-block; margin-left: 5px"><span class="seconds">' + strftime(':%S', time) + '</span></div>';
    // return '<span>' + strftime('%H:%M', time) + '</span><span class="seconds">' + strftime(':%S', time) + '</span>';
  }

  function getDate(time) {
    return '<span>' + strftime('%A', time) + ' | </span> <span class="translucent">' + strftime('%o %B', time) + '</span>';
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
