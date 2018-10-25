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


app.listen(port, () => console.log(`Server running on ${port}`))