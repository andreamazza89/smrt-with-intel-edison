(function(exports){
  // var displayDateTime = require('./clock-view').displayDateTime;
  var checkRadio = require('./clock-radio').checkRadio;
  var getTime = require('./clock-view').getTime;
  var getDate = require('./clock-view').getDate;
  var updateAnalogClock = require('./clock-view').updateAnalogClock;


  function init() {
    'use strict';

    var format = $('#time').data('format');
    var now = new Date();

    $('#time').text(getTime(now, format));
    $('#date').text(getDate(now));

    // Update time every second
    setInterval(function() {
      var now = new Date();
      $('#time').text(getTime(now, format));
      $('#date').text(getDate(now));
      updateAnalogClock(now, '#analog-clock');
      checkRadio(now);
    }, 1000);
  }

  exports.init = init;

})(this);
