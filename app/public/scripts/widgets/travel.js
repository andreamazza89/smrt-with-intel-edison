;(function(exports){
  // TFL API
  var api = 'https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail/status';
  var lines = [];

  $('.tube-status').each(function(){
    lines.push($(this).data('line'));
  });

	function ajaxCall(){
		'use strict';

  	$.ajax({
	    url: api,
	    success: function(data) {
	    	this.printStatus(data);
	    },
	    cache: false,
	    printStatus: function(data) {
	    	// Loop through set of data for each tube line..
	    	for (var i = 0; i < data.length; i++){
	    		// and check if the line matches one of the lines of interest..
	    		if (lines.indexOf(data[i].id) > -1){
            var tubeStatus = data[i].lineStatuses[0].statusSeverityDescription;
            var selector = $("span[data-line='" + data[i].id + "']");
            selector.text(
              tubeStatus.charAt(0).toUpperCase() + tubeStatus.slice(1).toLowerCase()
            );
          }
		    }
	    }
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
