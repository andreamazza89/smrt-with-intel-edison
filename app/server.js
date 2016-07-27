var browserify = require('browserify-middleware');
var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var fs = require('fs');

nunjucks.configure(__dirname + '/views', {
    watch: true,
    express: app
  });

app.set('view engine', 'njk');
app.use(express.static('./app/public'));
app.get('/widgets/main.js', browserify('./app/widgets/main.js'));

app.get('/mirror', function(req, res){

  fs.readFile(__dirname + '/widgets.json', function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.render('mirror', { widgetData: JSON.parse(data).widgets });
  });
});


app.listen(3000, function(){
  console.log('listening at http://localhost:3000');
});
