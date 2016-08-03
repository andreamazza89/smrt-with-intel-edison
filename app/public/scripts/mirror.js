var updateWeather = require('./widgets/weather');
var updateTflTrains = require('./widgets/tfl-trains');
var updateClock = require('./widgets/clock');
var updateRSS = require('./widgets/rss');
var bind = require('./leapFiles/bind');

updateWeather();
setInterval(updateWeather, 300000);

updateTflTrains();
setInterval(updateTflTrains, 300000);

updateClock();
setInterval(updateClock, 1000);

updateRSS();
setInterval(updateRSS, 300000)

var lastGestureTime = Date.now();

$(document).ready(function(){
  var controller  = new Leap.Controller({enableGestures: true});
  controller.on('deviceFrame', function(frame) {

    if (frame.gestures.length > 0) {
      var gesture = frame.gestures[0];
      var type = gesture.type;

      switch(type){
        case "swipe":
          if (gesture.state == "stop") {
            $('#audio-player').trigger('pause');
            radioIsNotLoaded = true;
          }
          break;

        case "keyTap":
          if (gesture.state == "stop" && Date.now() >= lastGestureTime + 500) {
            $('.main-content').toggleClass('hidden');
            lastGestureTime = Date.now();
          }
          break;

        case "screenTap":
          if (gesture.state == "stop") {}
          break;
      }
    }
  });

  controller.connect();

  $('.mirror-widget').each(function(){
    bind(this, 'mouseenter', function(){
      $(this).addClass('active');
    });

    bind(this, 'mouseleave', function(){
      $(this).removeClass('active');
    });
  });

});
