(function(exports){

  function displayDateTime(dateTime) {
    var hours   = twoDigitsZeroPadding(dateTime.hours);
    var minutes = twoDigitsZeroPadding(dateTime.minutes);
    var seconds = twoDigitsZeroPadding(dateTime.seconds);

    var year  = dateTime.year.toString();
    var month = dateTime.month.toString();
    var day   = dateTime.day.toString();

    var timeZone = $("#clock-widget .inner").data('timezone');
    var time = hours + ':' + minutes + ':' + seconds;
    var date = day + '-' + month + '-' + year;

    $("#clock-widget #location").html(timeZone);
    $("#clock-widget #time").html(time);
    $("#clock-widget #date").html(date);
  }

  function twoDigitsZeroPadding(number) {
    stringyNumber = number.toString();
    if (stringyNumber.length < 2) {
      return "0" + stringyNumber;
    } else {
      return stringyNumber;
    }
  }

  exports.displayDateTime = displayDateTime;

})(this);
