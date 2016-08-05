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
}

module.exports = init;
