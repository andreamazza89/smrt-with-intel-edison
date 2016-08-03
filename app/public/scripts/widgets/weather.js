// Metoffice API
var icons = require('./icons').icons;
var weatherType = require('./weather-weatherTypes'); 
var api = 'http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/352409?res=3hourly&key=b821346b-d530-4054-a2e6-2fee05048742';
var textContainer = $('#weather-widget .text');
var iconContainer = $('#weather-widget .icon');

(function(exports){
  $.support.cors = true;

  function ajaxCall(){
		'use strict';

    $.ajax({
	    url: api,
	    success: function(data) {
	    	this.printWeather(data.SiteRep);
	    },
	    printWeather: function(data) {
	    	var parameters = data.Wx.Param;
	      var values = data.DV.Location.Period[0].Rep[1];

				textContainer.html(values[parameters[3].name] + '&deg;<sup>c</sup> ' + weatherType[values[parameters[8].name]]);
        iconContainer.html(icons[values[parameters[8].name]]);
      },
      error: function(err){
        console.log(err);
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
