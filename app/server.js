var fs = require('fs'),
    path = require('path'),
    bodyParser = require('body-parser'),
    browserify = require('browserify-middleware'),
    express = require('express'),
    app = express(),
    nunjucks = require('nunjucks');
    sass = require('node-sass-middleware'); //sass disabled for intel-edison

var port = parseInt(process.env.NODE_PORT) || 4000;
var browserSync = require('browser-sync').create();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'njk');

nunjucks.configure(__dirname + '/views', {
  watch: true,
  express: app
});

//sass disabled for intel edison
app.use(sass({
  src: __dirname + '/sass',
  dest:__dirname + '/public',
  outputStyle: 'compressed'
}));

app.use(express.static('./app/public'));
app.use('/lib', express.static('./app/lib'));
app.get('/scripts/mirror-bundle.js', browserify(__dirname + '/models/mirror.js'));
app.get('/scripts/cp-bundle.js', browserify(__dirname + '/models/control-panel.js'));

app.get('/', function(req, res){
  fs.readFile(getJSONPath(), function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.render('control-panel', {
      widgetData: JSON.parse(data).widgets,
      weatherLocations: require(__dirname + '/data/weatherLocations')
    });
  });
});

app.get('/mirror', function(req, res){
  fs.readFile(getJSONPath(), function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.render('mirror', { widgetData: JSON.parse(data).widgets });
  });
});

app.get('/api/widgets', function(req, res) {
  fs.readFile(getJSONPath(), function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(data.toString('utf8'));
  });
});

app.post('/api/widgets', function(req, res) {
  var widgets = req.body;
  fs.writeFile(getJSONPath(), JSON.stringify(widgets, null, 4), function(err) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(widgets);
  });
});


browserSync.init({
  proxy: 'localhost:' + port,
  files: ['./app/data/widgets.json', './app/sass/**/*.scss'],
  open: false,
  logLevel: 'silent',
  notify: false,
  port: (port + 1)
});

app.listen(port, function(){
  console.log("\x1b[36mControl Panel\x1b[0m\nhttp://localhost:" + port + "\n");
  console.log("\x1b[36mMirror\x1b[0m\nhttp://localhost:" + (port + 1)+ "/mirror");
});

function getJSONPath(){
  return __dirname + (process.env.widget_path || '/data/widgets') +  '.json';
}
