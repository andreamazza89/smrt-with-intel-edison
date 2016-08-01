(function(exports){

  var displayDateTime = require('./clock-view').displayDateTime;
  var fetchCurrentDateTime = require('./clock-data').fetchCurrentDateTime;





  var radioIsNotLoaded = true;

  function checkRadio(dateTime) {

    var currentTimeHoursSeconds = (dateTime.getHours().toString() + dateTime.getMinutes().toString())  ;

    var isRadioEnabled = $("#clock-widget .inner").data('radio-enabled');
    var triggerTime = $("#clock-widget .inner").data('radio-trigger-time');
    var timeOut = $("#clock-widget .inner").data('radio-timeout');
    var radioStation = $("#clock-widget .inner").data('radio-station');

    var isTimeToTurnRadioOn = triggerTime == currentTimeHoursSeconds;
    var isTimeToTurnRadioOff = timeOut == currentTimeHoursSeconds;

    if(isRadioEnabled && isTimeToTurnRadioOn && radioIsNotLoaded) {

      var stations = {
        magic: 'http://icy-e-bz-07-boh.sharp-stream.com:8000/magic1054.mp3',
        bbcRadio4: 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio4fm_mf_p?s=1470050788&e=1470065188&h=473d6316cc13ea72ccde6e8635e0d04f'
      };

      $('#radio-station').attr('src', stations[radioStation]);
      $('#audio-player').trigger('load');
      $('#audio-player').trigger('play');
      console.log(stations[radioStation]);
    
      radioIsNotLoaded = false;
    }

    if(isTimeToTurnRadioOff) {
      $('#audio-player').trigger('pause');
      radioIsNotLoaded = true;
    }

  }







  function init() {
    'use strict';

    // Update time every second
    setInterval(function() {
      var dateTime = fetchCurrentDateTime();
      displayDateTime(dateTime);
      checkRadio(dateTime);
    }, 1000);
  }

  exports.init = init;

})(this);
