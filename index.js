const express = require('express')
const app = express()
const port = 3000
const db = require('./queries')

app.get('/students', db.getStudents)
app.get('/marks', db.getMarks)
app.get('/courses', db.getCourses)
app.get('/tests', db.getTests)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
