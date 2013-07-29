var express = require('express');
var app = express();
app.use(express.logger());

// AF:29.07.2013
var fs = require('fs');
var str = fs.readFileSync('index.html').toString();

app.get('/', function(request, response) {
  //response.send('Hello World! 2');
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
