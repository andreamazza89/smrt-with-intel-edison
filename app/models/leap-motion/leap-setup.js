$(document).ready(function(){
  var bind = require('./bind');
  var lastGestureTime = Date.now();
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
