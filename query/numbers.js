const express = require('express');
const app = express();
const port = process.env.PORT || 10101;
const bodyparser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/', function(req, res) {
    const first = parseInt(req.body.first);
    const second = parseInt(req.body.second);
    const third = parseInt(req.body.third);

    const sum = first + second + third
    const prom = sum / 3

  
    res.send(
      {
        'Numero uno' : `${first}`,
        'Numero dos' : `${second}`,
        'Numero tres' : `${third}`,
        'La sumatoria de los tres numeros es ' : `${sum}`,
        'Promedio de los tres numeros' : `${prom}`
      }
    );
  });
  
  app.listen(port);
  console.log('Server started at http://localhost:' + port);