(function(exports){
  // var displayDateTime = require('./clock-view').displayDateTime;
  var checkRadio = require('./clock-radio').checkRadio;
  var getTime = require('./clock-view').getTime;
  var getDate = require('./clock-view').getDate;


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

      checkRadio(now);
    }, 1000);
  }

  //ANIMATED SMOOTH CLOCK BELOW ************************************************
  //****************************************************************************

    /// Simple smooth clock by Ken Fyrstenberg Nilsen
  /// License CC3.0-Attribute
  //
  // var ctx = clock.getContext('2d'),
  //   pi2 = Math.PI * 2;
  //
  // /// make 0 degree point up
  // ctx.translate(ctx.canvas.width * 0.5, ctx.canvas.height * 0.5);
  // ctx.rotate(-0.5 * Math.PI);
  // ctx.translate(-ctx.canvas.width * 0.5, -ctx.canvas.height * 0.5);
  //
  // ctx.strokeStyle = 'white';
  // ctx.lineCap = 'round';
  //
  // /// start
  // (function loop() {
  //   renderClock();
  //   requestAnimationFrame(loop);
  // })();
  //
  // function renderClock() {
  //
  //   var angles = timeToAngles(),
  //     cx = ctx.canvas.width * 0.5,
  //     cy = ctx.canvas.width * 0.5,
  //     lh = cx * 0.45,
  //     lm = cx * 0.8,
  //     ls = cx * 0.9,
  //     pos;
  //
  //   /// face
  //   ctx.clearRect(0, 0, cx * 2, cy * 2);
  //   ctx.beginPath();
  //   ctx.arc(cx, cy, cx - ctx.lineWidth - 1, 0, pi2);
  //
  //   /// hours
  //   pos = lineToAngle(cx, cy, lh, angles.h);
  //   ctx.moveTo(cx, cy);
  //   ctx.lineTo(pos.x, pos.y);
  //
  //   /// minutes
  //   pos = lineToAngle(cx, cy, lm, angles.m);
  //   ctx.moveTo(cx, cy);
  //   ctx.lineTo(pos.x, pos.y);
  //
  //   ctx.lineWidth = 5;
  //   ctx.stroke();
  //   ctx.beginPath();
  //
  //   /// seconds
  //   pos = lineToAngle(cx, cy, ls, angles.s);
  //   ctx.moveTo(cx, cy);
  //   ctx.lineTo(pos.x, pos.y);
  //
  //   ctx.lineWidth = 2;
  //   ctx.stroke();
  // }
  //
  // /// (c) Ken Fyrstenberg Nilsen (CC3.0. Attribute)
  // function timeToAngles() {
  //
  //   var os = 1 / 60, /// mini-step
  //     time = new Date(), /// get current time
  //     h = time.getHours(), /// get current hour
  //     m = time.getMinutes(), /// get current minutes
  //     s = time.getSeconds(), /// get current seconds
  //     ms = time.getMilliseconds(), /// get current milliseconds
  //     sa, ma, ha; /// for calc. angles
  //
  //   sa = pi2 * ((s / 60) + ((os) * ms * 0.001)); /// second's angle
  //   ma = pi2 * ((m / 60) + ((os) * s / 60)); /// minute's angle
  //   ha = pi2 * (((h % 12) / 12) + ((1 / 12) * m / 60)); /// hour's angle
  //
  //   return {
  //     h: ha,
  //     m: ma,
  //     s: sa
  //   };
  // }
  //
  // function lineToAngle(x, y, length, angle) {
  //   return {
  //     x: x + length * Math.cos(angle),
  //     y: y + length * Math.sin(angle)
  //   };
  // }

  exports.init = init;

})(this);
