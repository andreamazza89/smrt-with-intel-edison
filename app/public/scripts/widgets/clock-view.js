var strftime = require('strftime');

(function(exports){
  function getTime(time, format) {
    if (format === '12-hour') {
      return { time: strftime('%l:%M', time), seconds: strftime(':%S', time), ampm: strftime('%P', time) };
    }
    return { time: strftime('%H:%M', time), seconds: strftime(':%S', time) };
  }

  function getDate(time) {
    return { day: strftime('%A', time), date: strftime('%o %B', time) };
  }

  function updateAnalogClock(now) {
    $('#analog-clock .hour').css({ transform: 'rotate(' + (360 / 12) * (now.getHours() + (now.getMinutes() * 1/60)) + 'deg)' });
    $('#analog-clock .minute').css({ transform: 'rotate(' + (360 / 60) * now.getMinutes() + 'deg)' });
    $('#analog-clock .second').css({ transform: 'rotate(' + (360 / 60) * now.getSeconds() + 'deg)' });
  }

  function updateTime(time, format) {
    $('#time .digital-time').html(getTime(time, format).time);
    $('#time .seconds').html(getTime(time, format).seconds);
    $('#time .ampm').html(getTime(time, format).ampm);
  }

  function updateDate(date) {
    $('#date .calendar-day').html(getDate(date).day);
    $('#date .calendar-date').html(getDate(date).date);
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
  exports.updateDate = updateDate;
  exports.updateTime = updateTime;

})(this);
