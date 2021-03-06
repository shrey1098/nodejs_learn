import express from "express";
const router = express.Router()
import {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePeople}
from '../controllers/people.js'



//router.get('/',getPeople)

//router.post('/',createPerson)

//router.post('/postman',createPersonPostman)

//router.put('/:id',updatePerson)

//router.delete('/:id',deletePeople)

router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePeople)
export {
  router as people
}
