const express = require('express');
const bodyparser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
const app = express();
const port = process.env.PORT || 10101;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/first/:first/second/:second/third/:third/', (req, res) => {

  const one = parseInt(req.params.first);
  const two = parseInt(req.params.second);
  const tree = parseInt(req.params.third);

  const sum = one + two + tree
  const prom = sum / 3

  res.send(
    {
      'Numero uno' : `${one}`,
      'Numero dos' : `${two}`,
      'Numero tres' : `${tree}`,
      'La sumatoria de los tres numeros es ' : `${sum}`,
      'Promedio de los tres numeros' : `${prom}`
    }
  );
})
  
  app.listen(port);
  console.log('Server started at http://localhost:' + port);