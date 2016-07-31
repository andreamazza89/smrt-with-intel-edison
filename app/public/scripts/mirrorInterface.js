

$(document).ready(function(){

  var controller  = new Leap.Controller({enableGestures: true});

  var widgets;

  controller.on('deviceFrame', function(frame) {
    var body;

    for(var i = 0; i < frame.gestures.length; i++){
      var gesture = frame.gestures[i];
      var type    = gesture.type;

      switch( type ){

        case "swipe":
          if (gesture.state == "stop") {

          }
          break;

        case "keyTap":
          if (gesture.state == "stop") {
            // if( console.log(Date.now() - lastGestureTime)  > 3){
              body = document.getElementById('body');
              body.style.color = (body.style.color !== 'black' ? 'black' : 'white');
            //   lastGestureTime = Date.now() ;
            // }

          }
          break;

          case "screenTap":
          if (gesture.state == "stop") {

          }
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

  widgets = document.querySelectorAll('#weather-widget, #tfl-widget, #clock-widget');

  for (var i = 0; i < widgets.length; i++) {
    bind(widgets[i], 'mouseenter', 	function() { // jshint ignore:line
      this.style.border = '#E3F5DC';
      var div = $(this);
      div.stop(true, true).animate({
          margin: -10,
          width: "+=20",
          height: "+=20"
      }, 'fast');
    });

    bind(widgets[i], 'mouseleave', 	function() { // jshint ignore:line
      this.style.background = 'none';
      var div = $(this);
      div.stop(true, true).animate({
          margin: 0,
          width: "-=20",
          height: "-=20"
      }, 'fast');
    });
  }

});
