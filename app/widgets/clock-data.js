(function(exports){

  const HOUR = 3600000; //one hour in milliseconds

  var timezones = {
    london:  0,
    rome:    1
  };

  function fetchCurrentDateTime() {
    var currentDateTime = {};
    var timeZone = $("#clock-widget .inner").data('timezone');
    var currentTime = new Date();
    currentTime.setTime(currentTime.getTime() + (HOUR * timezones[timeZone]));

    currentDateTime.hours   = currentTime.getHours();
    currentDateTime.minutes = currentTime.getMinutes();
    currentDateTime.seconds = currentTime.getSeconds();

    currentDateTime.year    = currentTime.getFullYear();
    currentDateTime.month   = currentTime.getMonth() + 1;
    currentDateTime.day     = currentTime.getDate();

    return currentDateTime;
  }

  exports.fetchCurrentDateTime = fetchCurrentDateTime;

})(this);
