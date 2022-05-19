var express = require('express');
var tokyoForecast = require('./tokyoForecast');
var yokohamaForecast = require('./yokohamaForecast');
var chibaForecast = require('./chibaForecast');

var app = express();
app.get('/', (req, res) => {
  res.status(200).json('Express!!');
});

app.get('/forecast/130010', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:58080');
  res.status(200).json(tokyoForecast);
});

app.get('/forecast/140010', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:58080');
  res.status(200).json(yokohamaForecast);
});

app.get('/forecast/120010', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:58080');
  res.status(200).json(chibaForecast);
});

// ポート5000番でlistenする
app.listen(5000);
