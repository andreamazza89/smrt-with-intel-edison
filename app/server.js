var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var browserify = require('browserify-middleware');
var express = require('express');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('./app/public'));
// app.use('/widgets', express.static('./app/widgets'));
app.get('/widgets/main.js', browserify('./app/widgets/main.js'));

app.get('/mirror', function(req, res){
  res.sendfile('./app/public/mirror.html');
});

var WIDGETS_FILE = path.join(__dirname, 'widgets.json');

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


app.listen(3000, function(){
  console.log('listening at http://localhost:3000');
});
