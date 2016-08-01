(function(exports){

  var displayDateTime = require('./clock-view').displayDateTime;
  var fetchCurrentDateTime = require('./clock-data').fetchCurrentDateTime;

  function startRadio() {
    var isRadioEnabled = $("#clock-widget .inner").data('radio-enabled');
    if(isRadioEnabled) {console.log("it works");}
  }

  function init() {
    'use strict';

    // Update time every second
    setInterval(function() {
      var dateTime = fetchCurrentDateTime();
      displayDateTime(dateTime);
      startRadio();
    }, 1000);
  }

  exports.init = init;

})(this);
