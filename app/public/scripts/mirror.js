var updateWeather = require('./widgets/weather');
var updateTflTrains = require('./widgets/tfl-trains');
var updateClock = require('./widgets/clock');
var updateRSS = require('./widgets/rss');

require('./leap-motion/leap-setup');

updateWeather();
setInterval(updateWeather, 300000);

updateTflTrains();
setInterval(updateTflTrains, 300000);

updateClock();
setInterval(updateClock, 1000);

updateRSS();
setInterval(updateRSS, 300000)
