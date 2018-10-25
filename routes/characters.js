const express = require('express')
const router = express.Router()
const characters = require('../data.json')



//basic get all route
router.get('/', (req, res) => {
  res.json({characters})
})


//basic get one route
router.get('/:id', (req, res, next) =>{
  const id = req.params.id
  // if (typeof id !== 'number') {
  //   next()
  // }
  // res.json({character: characters[req.params.index-1]})
  // for (let i = 0; i < characters.length; i++) {
  //   if (characters[i].id == id) {
  //     res.json({ character: characters[i] })
  //   }
  // }
  const character = characters.filter(character => {
    return character.id == id
  })[0]
  res.json({character : character})
})


//basic put
router.put('/:id', (req, res) => {
  const body = req.body
  const id = req.params.id
  //find correct resource by its id
  // let characterMatch = characters.map(character => character.id == id)
  //replace whats in the current characters array with body
  //res.json the modified array
  const updatedCharacters = characters.map(character => {
    if(character.id == id) {
      return body
    }
    return character
  })
  res.json({characters: updatedCharacters})
})


//basic delete route
router.delete('/:id', (req, res) => {
  const id = req.params.id
  // for (let i = 0; i < characters.length; i++) {
  //   if (characters[i].id == id) {
  //     let splicePoint = characters.indexOf(characters[i])
  //     characters.splice(splicePoint, 1)
  //   }
  // }
  const survivors = characters.filter(character => {
    return character.id !== id
  })
  res.json({characters: survivors})
})


//basic post 
router.post('/', (req, res, next) =>{
  //Pull data from the post body
  const body = req.body
  console.log(body)

  //insert new data into characters array
  characters.push(body)
  res.json({ characters: characters})
})


module.exports = router