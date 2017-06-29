var express = require('express');
var app = express();

app.use(express.static(__dirname + '/src/public'));

app.listen(3030, function () {
  console.log('Blockchain Feed listening on port 3030.');
});
