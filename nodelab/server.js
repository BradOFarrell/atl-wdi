var express = require('express'); // Loading express on our server
var app = express(); // install express on our server
var hbs = require('hbs'); // loads handlebars

app.get('/', (request, response) => {
  response.send("hello wdi12");
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Express is listening on port ", PORT);
});