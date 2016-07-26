var express = require('express');
var app = express();

app.use(express.static('./app/public'));
app.use('/widgets', express.static('./app/widgets'));

app.get('/mirror', function(req, res){
  res.sendfile('./app/public/mirror.html');
});


app.listen(3000, function(){
  console.log('listening at http://localhost:3000');
});
