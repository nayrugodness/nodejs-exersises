const express = require('express');
const app = express();
const port = process.env.PORT || 10101;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', function(req, res) {
    const first = req.body.first;
    const second = req.body.second;
    const third = req.body.third;
    const fourth = req.body.fourth;
    const fifth = req.body.fifth;

  
    res.send(
      {
        'Nombres' : [
            first,
            second,
            third,
            fourth,
            fifth
        ],
      }
    );
  });
  
  app.listen(port);
  console.log('Server started at http://localhost:' + port);