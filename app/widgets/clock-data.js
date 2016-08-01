(function(exports){

  const HOUR = 3600000; //one hour in milliseconds

  var timezones = {
    london:  0,
    rome:    1
  };

  function fetchCurrentDateTime() {
    var currentDateTime = new Date();
    var timeZone = $("#clock-widget .inner").data('timezone');
    var timeZonedDateTime = new Date(currentDateTime.setTime(currentDateTime.getTime() + (HOUR * timezones[timeZone])));

    return timeZonedDateTime;
  }

  exports.fetchCurrentDateTime = fetchCurrentDateTime;

})(this);
