var express = require("express");
var app = express();

app.get("/mirror", function(req, res){
  res.send('sunny');
});

app.listen(3000, function(){
  console.log('listening at http://localhost:3000');
});
