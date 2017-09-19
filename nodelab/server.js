const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send("hello wdi12");
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Express is listening on port ", PORT);
});