var api = 'https://api.tfl.gov.uk/line/mode/tube,overground,dlr,tflrail,tram/status';
var lines = [];

$('.tube-status').each(function(){
  lines.push($(this).data('line')); // Consider using $.map()?
});

function printStatus(data) {
  if (lines.indexOf(data.id) > -1){
    var tubeStatus = data.lineStatuses[0].statusSeverityDescription;
    var statusSelector = $("span[data-line='" + data.id + "']");

    statusSelector.text(
      tubeStatus.charAt(0).toUpperCase() + tubeStatus.slice(1).toLowerCase()
    );
  }
}

function ajaxCall(){
	'use strict';

	$.ajax({
    url: api,
    success: function(data) {
      for (var i = 0; i < data.length; i++){
    	  printStatus(data[i]);
      }
    },
    cache: false
  });
}

module.exports = ajaxCall;
