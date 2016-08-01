(function(exports){

  function displayDateTime(dateTime) {
    var hours   = twoDigitsZeroPadding(dateTime.getHours());
    var minutes = twoDigitsZeroPadding(dateTime.getMinutes());
    var seconds = twoDigitsZeroPadding(dateTime.getSeconds());

    var year  = dateTime.getFullYear();
    var month = dateTime.getMonth() + 1;
    var day   = dateTime.getDate();

    var timeZone = $("#clock-widget .inner").data('timezone');
    var time = hours + ':' + minutes + ':' + seconds;
    var date = day.toString() + '-' + month.toString() + '-' + year.toString();

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
