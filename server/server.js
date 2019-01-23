var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())

app.listen(3000, () => {
  console.log("Server running on port 3000");
})

app.get("/url", (req, res, next) => {
  res.json([ 1, 2, 3, 4, 5 ])
})

const dateToJson = (year, month, date) => (new Date(year, month - 1, date)).toJSON()

var books = [
  {
    title: 'Grit',
    author: 'Angela Duckworth',
    dateCompleted: dateToJson(2019, 1, 4)
  }
]

app.get("/books", (req, res, next) => {
  res.json(books)
})

app.post('/books', (req, res) => {
  console.log(req.body)
  res.sendStatus(200)
})
