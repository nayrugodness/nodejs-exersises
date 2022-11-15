const express = require('express');
const app = express();
const port = process.env.PORT || 10101;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/first/:first', function(req, res) {
    const first = parseInt(req.params.first);
    const second = parseInt(req.body.second);
  
    res.send(
      {
        'Numero uno' : `${first}`,
        'Numero dos' : `${second}`,
        'La multiplicación de los dos numeros es' : `${first*second}`
      }
    );
  });
  
  app.listen(port);
  console.log('Server started at http://localhost:' + port);