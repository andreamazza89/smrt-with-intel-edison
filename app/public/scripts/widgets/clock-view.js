(function(exports){
  function getTime(time, format) {
    var hours   = twoDigitsZeroPadding(time.getHours());
    var minutes = twoDigitsZeroPadding(time.getMinutes());
    var seconds = twoDigitsZeroPadding(time.getSeconds());

    if (format === '12-hour') {
      hours = (hours + 11) % 12 + 1;
      var suffix = (hours >= 12)? 'pm' : 'am';
    }

    return hours + ':' + minutes + ':' + seconds + (suffix || '');
  }

  function getDate(time) {
    var year  = time.getFullYear();
    var month = twoDigitsZeroPadding(time.getMonth() + 1);
    var day   = twoDigitsZeroPadding(time.getDate());

    return day.toString() + '/' + month.toString() + '/' + year.toString();
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

})(this);
