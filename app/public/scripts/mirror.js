var weather = require('./widgets/weather');
var travel = require('./widgets/tfl-trains');
var clock = require('./widgets/clock');
var rss = require('./widgets/rss');

weather.init();
travel.init();
clock.init();
rss.init();

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

  function bind(elm, evt, f) {
    if (elm.addEventListener) {
      elm.addEventListener(evt, f, false);
    } else if (elm.attachEvent) {
      elm.attachEvent('on' + evt, f);
    }
  }

  $('.mirror-widget').each(function(){
    bind(this, 'mouseenter', function(){
      $(this).addClass('active');
    });

    bind(this, 'mouseleave', function(){
      $(this).removeClass('active');
    });
  });

});
