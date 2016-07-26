

function leap(){
  // var leapjs = require('leapjs');

//   Leap.loop({
//
//   hand: function(hand){
//     console.log( hand.screenPosition() );
//   }
//
// }).use('screenPosition');


  var controller  = new Leap.Controller({enableGestures: true});

  controller.on('deviceFrame', function(frame) {
    // loop through available gestures
    for(var i = 0; i < frame.gestures.length; i++){
      var gesture = frame.gestures[i];
      var type    = gesture.type;

      switch( type ){

        case "circle":
          if (gesture.state == "stop") {
            console.log('circle');
          }
          break;

        case "swipe":
          if (gesture.state == "stop") {
            console.log('swipe');
          }
          break;

        case "screenTap":
          if (gesture.state == "stop") {
            console.log('screenTap');
          }
          break;

        case "keyTap":
          if (gesture.state == "stop") {
            console.log('keyTap');
          }
          break;

        }
      }
  });



  controller.connect();
}
