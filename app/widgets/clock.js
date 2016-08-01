(function(exports){

  var displayDateTime = require('./clock-view').displayDateTime;
  var fetchCurrentDateTime = require('./clock-data').fetchCurrentDateTime;
  var checkRadio = require('./clock-radio').checkRadio;

  function init() {
    'use strict';

    // Update time every second
    setInterval(function() {
      var dateTime = fetchCurrentDateTime();
      displayDateTime(dateTime);
      checkRadio(dateTime);
    }, 1000);
  }

  exports.init = init;

})(this);
