const express = require('express')
const app = express()
const cors = require('cors')
let port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const charactersRoutes = require('./routes/characters')

//General middleware 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

//basic get route
app.get('/', (req, res) =>{
  res.send('👽')
})

//any request that start with /characters send to this routing file
app.use('/characters', charactersRoutes)

//error handling
app.use(notFound)
app.use(errorHandler)

function notFound(req, res, next) {
  res.status(404).send({ error: 'Not found!', status: 404, url: req.originalUrl })
}

function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({
    error: err.message,
    stack,
    url: req.originalUrl 
  })
}

//listener
app.listen(port, () => console.log(`Server running on ${port}`))