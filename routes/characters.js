const express = require('express')
const router = express.Router()

//connection to db through knex
const knex = require('../db/connection')

//basic get all route
router.get('/', (req, res) => {
  knex('character')
    .orderBy('id', 'ASC')
    .then(characters => {
      res.json({ characters : characters })
    })
})

//basic get one route
router.get('/:id', (req, res, next) =>{
  const id = req.params.id
  knex('character')
    .where('id', id)
    .then(character => {
      !character.length ? 
      next() :
      res.json({ character : character[0] })
    })
})

//basic put
router.put('/:id', (req, res, next) => {
  const body = req.body
  const id = req.params.id
  knex('character')
    .where('id', id)
    .update(body)
    .returning('*')
    .then(updatedCharacter => {
      !updatedCharacter.length ? 
      next() :
      res.json({ updatedCharacter : updatedCharacter[0] })
    })
})

//basic delete route
router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  knex('character')
    .where('id', id)
    .del()
    .returning('*')
    .then(deletedCharacter =>{
      !deletedCharacter.length ? 
      next() :
      res.json({ deletedCharacter : deletedCharacter[0] })
    })
})

//basic post 
router.post('/', (req, res, next) =>{ 
  const body = req.body
  knex('character')
    .insert(body)
    .returning('*')
    .then(newCharacter => res.json({ newCharacter : newCharacter[0] }))
})

module.exports = router