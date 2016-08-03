var weatherData = require('./weatherData');
var api = 'http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/352409?res=3hourly&key=b821346b-d530-4054-a2e6-2fee05048742';
var celsiusContainer = $('#celsius');
var fahrenheitContainer = $('#fahrenheit');
var unitContainer = $('#weather-widget .unit');
var iconContainer = $('#weather-widget .icon');
var descriptionContainer = $('#weather-widget .description');

function printWeather(data) {
  var parameters = data.Wx.Param,
      values = data.DV.Location.Period[0].Rep[1];

  var currentWeather = weatherData[values[parameters[8].name]];
  var currentTemperature = values[parameters[3].name];

  celsiusContainer.html(currentTemperature);
  fahrenheitContainer.html(Math.round(currentTemperature*1.8+32));
  iconContainer.html(currentWeather.icon);
  descriptionContainer.html(currentWeather.name);
}

function ajaxCall(){
	'use strict';

  $.ajax({
    url: api,
    success: function(data) {
    	printWeather(data.SiteRep);
    },
    error: function(err){
      console.log(err);
    }
  });
}

module.exports = ajaxCall;
