var express = require('express');
var app = express();
var port = 3000;

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