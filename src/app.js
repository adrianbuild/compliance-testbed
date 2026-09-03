const express = require('express');
const app = express();

app.get('/run', (req, res) => {
  const result = eval(req.query.code);
  res.send('<h1>' + result + '</h1>');
});

app.get('/user', (req, res) => {
  res.send('Hallo ' + req.query.name);
});

module.exports = app;
