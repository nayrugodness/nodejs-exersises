const express = require('express');
const app = express()
const port = 10101;

app.get('/names', (req, res) => {
    res.status(200).json({status: 'Todo ok'});
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})