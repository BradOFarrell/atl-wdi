
var express = require('express');
var hbs = require('hbs');
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
    res.render('topping', {
        message: "Welcome to Express Pizza!"
    });
});

app.get('/topping/:type', function(req, res, next) {
    const toppingType = req.params.type;
    res.render('topping', {
        toppingType: toppingType
    });
});

app.get('/order/:amount/:size', function(req, res, next) {
    const amount = req.params.amount;
    const size = req.params.size;
    res.render('order', {
        amount: amount,
        size: size
    });
});