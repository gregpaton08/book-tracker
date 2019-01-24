var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())

var mongodb = require('mongodb')
var MongoClient = mongodb.MongoClient

var url = 'mongodb://localhost:27017/'

var collection

MongoClient.connect(url, (err, client) => {
  err ? console.error(err) : console.log('connected to database server successfully', db)

  var db = client.db('book_tracker')
  collection = db.collection('books')
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})

const dateToJson = (year, month, date) => (new Date(year, month - 1, date)).toJSON()

app.get("/books", (req, res, next) => {
  collection.find().toArray(function(error, books) {
    res.json(books)
  })
})

app.post('/books', (req, res) => {
  collection.insertOne(req.body, (err, r) => {
    res.sendStatus(200)
  })
})

app.delete('/books/:id', (req, res) => {
  collection.deleteOne({ _id: new mongodb.ObjectID(req.params.id) }, (err, r) => {
    res.sendStatus(r.deletedCount === 1 ? 200 : 404)
  })
})
