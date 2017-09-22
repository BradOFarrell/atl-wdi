var express = require('express');
var app = express();
var port = 3000;

// Use pirate controller for logic
var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);

// Use HBS views engine for views
app.set("view engine", "hbs");
app.set('views', './views');

app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});

app.get('/', function(req, res){
  res.send('Pirate quizz~!');  
});

app.get('/topping/:type', function(req, res, next) {
  res.send('Pirate quizz~!');
});

app.get('/order/:amount/:size', function(req, res, next) {
  res.send('Pirate quizz~!');
});