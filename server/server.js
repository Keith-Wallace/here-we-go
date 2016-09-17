var express = require('express');
var path = require('path');
require("babel-core").transform("code", {
  plugins: ["transform-react-jsx-source"]
});

var app = express();

app.use(express.static('./dist'));

app.use('/', function (req, res){
  res.sendFile(path.resolve('client/index.html'));
})

var port = 4000;

app.listen(port, function(error){
  if(error) throw error;
  console.log('Express server listening on port', port);
})