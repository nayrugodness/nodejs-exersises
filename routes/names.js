const express = require('express');
const bodyparser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
const app = express();
const port = process.env.PORT || 10101;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/name/:name/lastname/:lastname', (req, res) => {

  const name = req.params.name;
  const lastname = req.params.lastname;


  res.send(
    {
      'Hola' : `${name}  ${lastname}`,
    }
  );
})
  
  app.listen(port);
  console.log('Server started at http://localhost:' + port);