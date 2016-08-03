var weatherData = require('./weatherData');
var textContainer = $('#weather-widget .text');
var iconContainer = $('#weather-widget .icon');

function getURL(id){
  return 'http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/' + id + '?res=3hourly&key=b821346b-d530-4054-a2e6-2fee05048742';
}

function printWeather(data) {
  var parameters = data.Wx.Param,
      values = data.DV.Location.Period[0].Rep[1];

  var currentWeather = weatherData[values[parameters[8].name]];
  var currentTemperature = values[parameters[3].name];

  textContainer.html(currentTemperature + '&deg;<sup>c</sup> ' + currentWeather.name);
  iconContainer.html(currentWeather.icon);
}

function ajaxCall(){
	'use strict';
  var url = getURL($('#weather-widget .text').data('city'));

  $.ajax({
    url: url,
    success: function(data) {
    	printWeather(data.SiteRep);
    },
    error: function(err){
      console.log(err);
    }
  });
}

module.exports = ajaxCall;
