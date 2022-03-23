const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.static('build'))

const PORT = process.env.PORT || 3001

const mongoose = require('mongoose')
require('dotenv').config()
const url = process.env.DB_URL

mongoose.connect(url)

const quizSchema = new mongoose.Schema({
  _id: String,
  name: String,
  type: String,
  images: Boolean,
  plays: Number,
  shuffle: Boolean,
  scores: [Number],
  questions: [{
    id: Number,
    title: String,
    desc: String,
    options: [{
      0: String,
      1: Number
    }],
    correct: String
  }]
})

const Quiz = mongoose.model('quiz', quizSchema)

app.get('/data/:id', (request, response) => {
    const id = request.params.id
    Quiz.find({ _id: id }).then(quiz => {
        response.json(quiz)
    })
})

app.put('/data/:id/plays/:value', (request, response) => {
  const id = request.params.id
  const value = request.params.value

  Quiz.updateOne({ _id: id }, {$set: {"plays": value}}, function(err, doc) {
      response.json(doc);
  });
})

app.post('/data/:id/scores/:value', (request, response) => {
  const id = request.params.id
  const value = request.params.value
  Quiz.findOneAndUpdate({ _id: id }, {$push: {"scores": value}}, function(err, doc) {
      response.end();
  });
})

app.put('/data/:id/questions/:num/:answer/:value', (request, response) => {
  const id = request.params.id
  const num = request.params.num
  const value = request.params.value
  const answer = request.params.answer.replaceAll("%20", " ")

  Quiz.findOneAndUpdate(
    { _id: id }, 
    {$set: {"questions.$[e1].options.$[e2].1": value}},
    {arrayFilters: [
      {"e1.id": num},
      {"e2.0": answer}
    ]}, 
    function(err, doc) {
      response.end()
  });
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})