(function(exports){

  var displayDateTime = require('./clock-view').displayDateTime;
  var fetchCurrentDateTime = require('./clock-data').fetchCurrentDateTime;
  
  function init() {
    'use strict';

    // Update time every second
    setInterval(function() {
      var dateTime = fetchCurrentDateTime();
      displayDateTime(dateTime);
    }, 1000);
  }

  exports.init = init;

})(this);
