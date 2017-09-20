
//require express package
var express = require('express');
//save an express module as 'app'
var app     = express();
// assigning 3000 as our port
var port    = 3000;

// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});

app.get('/', function(req, res){
    res.send('Welcome to Express Pizza!');
});

app.get('/', function(req, res){
    res.send('Welcome to Express Pizza!');
});

app.get('/topping/:type', function(req, res, next) {
    const toppingType = req.params.type;
    res.send(toppingType+"!");        
});

app.get('/order/:amount/:size', function(req, res, next) {
    const amount = req.params.amount;
    const size = req.params.size;
    res.send("Order: Amount: "+amount+" Size: "+size); 
});