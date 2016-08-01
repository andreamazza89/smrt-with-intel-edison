var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var browserify = require('browserify-middleware');
var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var sass = require('node-sass-middleware');

var WIDGETS_FILE = __dirname + (process.env.widget_path || '/widgets') +  '.json';
var browserSync = require('browser-sync').create();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

nunjucks.configure(__dirname + '/views', {
    watch: true,
    express: app
  });

app.use(sass({
  src: __dirname + '/sass',
  dest:__dirname + '/public',
  outputStyle: 'compressed'
}));

app.set('view engine', 'njk');

app.use(express.static('./app/public'));
app.get('/bundle.js', browserify('./app/widgets/main.js'));
app.get('/scripts/bundle.js', browserify('./app/public/scripts/interface.js'));

app.get('/', function(req, res){
  fs.readFile(WIDGETS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.render('control-panel', { widgetData: JSON.parse(data).widgets });
  });
});

app.get('/mirror', function(req, res){
  fs.readFile(WIDGETS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.render('mirror', { widgetData: JSON.parse(data).widgets });
  });
});


app.get('/api/widgets', function(req, res) {
  fs.readFile(WIDGETS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(data.toString('utf8'));
  });
});

app.post('/api/widgets', function(req, res) {
  var widgets = req.body;
  fs.writeFile(WIDGETS_FILE, JSON.stringify(widgets, null, 4), function(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(widgets);
  });
});

browserSync.init({
  proxy: 'localhost:3000',
  files: ['./app/widgets.json'],
  startPath: '/mirror'
});

app.listen(3000, function(){
  console.log('listening at http://localhost:3000');
});
