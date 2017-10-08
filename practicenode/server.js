var express = require('express');
var app = express();
var hbs = require('hbs');

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.get('/math/:operator', (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);
  
    if(req.params.operator === "add"){
      res.send(`${num1 + num2}`)
    } else if (req.params.operator === "subtract"){
      res.send(`${num1 - num2}`)
    } else if (req.params.operator === "divide"){
      res.send(`${num1 / num2}`)
    } else if (req.params.operator === "multiply"){
      res.send(`${num1 * num2}`)
    } else {
      res.send("invalid")
    }
    
  });

app.get('/', function(req, res){
    res.send('hello world!!');
  });
  
  app.listen(3000);