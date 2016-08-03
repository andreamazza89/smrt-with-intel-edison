;(function(exports){
  var api = 'https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail,tram/status';
  var lines = [];

  $('.tube-status').each(function(){
    lines.push($(this).data('line'));
  });

  function printStatus(data) {
    var tubeStatus = data.lineStatuses[0].statusSeverityDescription;
    var statusSelector = $("span[data-line='" + data.id + "']");

    statusSelector.text(
      tubeStatus.charAt(0).toUpperCase() + tubeStatus.slice(1).toLowerCase()
    );
  }

	function ajaxCall(){
		'use strict';

  	$.ajax({
	    url: api,
	    success: function(data) {
        for (var i = 0; i < data.length; i++){
          if (lines.indexOf(data[i].id) > -1){
	    	    printStatus(data[i]);
          }
        }
	    },
	    cache: false
	  });
	}

  function init() {
  	'use strict';

  	ajaxCall();

  	// Reload info every 5 mins:
  	setInterval(ajaxCall, 300000);
  }

  exports.init = init;

})(this);
