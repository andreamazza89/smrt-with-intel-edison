(function(exports){

  var radioIsNotLoaded = true;

  var stations = {
    magic: 'http://icy-e-bz-07-boh.sharp-stream.com:8000/magic1054.mp3',
    bbcRadio4: 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio4fm_mf_p?s=1470050788&e=1470065188&h=473d6316cc13ea72ccde6e8635e0d04f',
    smooth: 'http://media-the.musicradio.com:80/SmoothLondonMP3'
  };

  function checkRadio(dateTime) {

    var currentTimeHoursSeconds = (dateTime.getHours().toString() + dateTime.getMinutes().toString())  ;

    var isRadioEnabled = $("#clock-widget .inner").data('radio-enabled');
    var triggerTime = $("#clock-widget .inner").data('radio-trigger-time');
    var timeOut = $("#clock-widget .inner").data('radio-timeout');
    var radioStation = $("#clock-widget .inner").data('radio-station');

    var isTimeToTurnRadioOn = triggerTime == currentTimeHoursSeconds;
    var isTimeToTurnRadioOff = timeOut == currentTimeHoursSeconds;

    if(isRadioEnabled && isTimeToTurnRadioOn && radioIsNotLoaded) {

      $('#radio-station').attr('src', stations[radioStation]);
      $('#audio-player').trigger('load');
      $('#audio-player').trigger('play');

      radioIsNotLoaded = false;
    }

    if(isTimeToTurnRadioOff) {
      $('#audio-player').trigger('pause');
      radioIsNotLoaded = true;
    }

  }

  exports.checkRadio = checkRadio;

})(this);
