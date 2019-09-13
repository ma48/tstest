var express = require('express');
var app = express();
var port = 3000;
app.get('/', function (req, res) { return res.send('Hello!!'); });
app.listen(port, function () { return console.log("app listening on port " + port); });
