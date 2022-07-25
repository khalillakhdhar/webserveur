const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/welcome', function (req, res) {
    res.send('welcome to express')
  })

app.listen(3000)
console.log("server is running on port 3000")