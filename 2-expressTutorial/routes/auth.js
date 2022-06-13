import express from "express";
const router = express.Router()

router.post('/', (req, res)=>{
  const {name} = req.body
  if(name){
      res.status(200).send(`Welcome ${name}`)
  }
  else{
    res.status(401).send('name not entered')
  }
})

export {router as login}
