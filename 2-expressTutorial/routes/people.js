const express = require('express')
const router = express.Router()
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePeople
} = require('../controllers/people')


//router.get('/',getPeople)

//router.post('/',createPerson)

//router.post('/postman',createPersonPostman)

//router.put('/:id',updatePerson)

//router.delete('/:id',deletePeople)

router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePeople)
module.exports =router
