const Pool = require('pg').Pool
const pool = new Pool({
  user: 'jnapiorkowski',
  host: 'localhost',
  database: 'jnapiorkowski',
  port: 5432,
})

const getCourses = (request, response) => {
  pool.query('SELECT * FROM courses', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getMarks = (request, response) => {
  pool.query('SELECT * FROM marks', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getStudents = (request, response) => {
  pool.query('SELECT * FROM students', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getTests = (request, response) => {
  pool.query('SELECT * FROM tests', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getCourses,
  getStudents,
  getTests,
  getMarks
}
