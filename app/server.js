var fs = require('fs'),
    path = require('path'),
    bodyParser = require('body-parser'),
    browserify = require('browserify-middleware'),
    express = require('express'),
    app = express(),
    nunjucks = require('nunjucks'),
    sass = require('node-sass-middleware');

var WIDGETS_FILE = __dirname + (process.env.widget_path || '/widgets') +  '.json';
var browserSync = require('browser-sync').create();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'njk');

nunjucks.configure(__dirname + '/views', {
  watch: true,
  express: app
});

app.use(sass({
  src: __dirname + '/sass',
  dest:__dirname + '/public',
  outputStyle: 'compressed'
}));

app.use(express.static('./app/public'));
app.get('/scripts/mirror-bundle.js', browserify(__dirname + '/public/scripts/mirror.js'));
app.get('/scripts/cp-bundle.js', browserify(__dirname + '/public/scripts/control-panel.js'));

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
  open: false,
  logLevel: "silent"
});

app.listen(3000, function(){
  console.log("\x1b[36mControl Panel\x1b[0m\nhttp://localhost:3000\n");
  console.log("\x1b[36mMirror\x1b[0m\nhttp://localhost:3001/mirror");
});
