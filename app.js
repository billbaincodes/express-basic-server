const express = require('express')
const app = express()
let port = 3000
const characters = require('./data.json')


app.get('/', (req, res) =>{
  res.send('🤖')
})

app.get('/characters', (req, res) => {
  res.json({characters})
})

app.get('/characters/:id', (req, res) =>{
  const id = req.params.id

  // res.json({character: characters[req.params.index-1]})

  // for (let i = 0; i < characters.length; i++) {
  //   if (characters[i].id == id) {
  //     res.json({ character: characters[i] })
  //   }
  // }

  const character = characters.filter(character => {
    return character.id == id
  })[0]
  
  res.json(character)

})


app.listen(port, () => console.log(`Server running on ${port}`))