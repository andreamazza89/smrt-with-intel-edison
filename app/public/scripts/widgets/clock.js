(function(exports){
  // var displayDateTime = require('./clock-view').displayDateTime;
  var checkRadio = require('./clock-radio').checkRadio;
  var getTime = require('./clock-view').getTime;
  var getDate = require('./clock-view').getDate;
  var updateAnalogClock = require('./clock-view').updateAnalogClock;
  var updateTime = require('./clock-view').updateTime;
  var updateDate = require('./clock-view').updateDate;

  function init() {
    'use strict';

    var format = $('#time').data('format');
    var now = new Date();
    updateTime(now, format);
    updateDate(now);
    updateAnalogClock(now);

    // Update time every second
    setInterval(function() {
      var now = new Date();
      updateTime(now, format);
      updateDate(now);
      updateAnalogClock(now);
      checkRadio(now);
    }, 1000);
  }

  exports.init = init;

})(this);
