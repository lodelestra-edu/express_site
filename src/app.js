const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('author: <your_name>')
})

app.listen(3000, function () {
  console.log('App exam listening on port 3000')
})
