const express = require('express')
const app = express()
let port = 3000
const bodyParser = require('body-parser')
const charactersRoutes = require('./routes/characters')


//General middleware 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


//basic get route
app.get('/', (req, res) =>{
  res.send('🤖👽')
})

//any request that start with /characters send to this routing file
app.use('/characters', charactersRoutes)


app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'What\'d you do?!' }, status: 404})
})

// eslint-disable-next-line
function errorHandler(err, req, res, next) {
  console.error('ERROR', err)

  const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined

  // if (process.env.NODE_ENV !== 'production') {
  //   stack = err.stack
  // } else {
  //   stack = undefined
  // }

  res.status(500).send({
    error: err.message,
    stack,
    url: req.originalUrl 
  })
}


app.listen(port, () => console.log(`Server running on ${port}`))