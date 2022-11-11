const express = require('express');
const app = express();
const port = process.env.PORT || 10101;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/api/users', function(req, res) {
    const name = req.body.name;
    const lastname = req.body.lastname;
  
    res.send(
      `Hola ${name} ${lastname}`
    );
  });
  
  app.listen(port);
  console.log('Server started at http://localhost:' + port);