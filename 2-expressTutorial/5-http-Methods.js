const express = require("express")
const app = express()
const morgan = require('morgan')
const port = 4040
let{people} = require('./data')

app.use(morgan('tiny'))
//static assets
app.use(express.static('./methods-public'))
// middleware to access req.body
app.use(express.urlencoded({extended: false}))
//parse json
app.use(express.json())


// parse form data
app.post('/login', (req, res)=>{
  const {name} = req.body
  if(name){
      res.status(200).send(`Welcome ${name}`)
  }
  else{
    res.status(401).send('name not entered')
  }
})

app.get('/api/people', (req, res)=>{
  res.status(200).json({'success':true, 'data':people})
})

app.post('/api/people', (req, res)=>{
  const{name} = req.body
  if(!name){
    return res.status(400).json({success:false, msg:'please provide name value'})
  }
  res.status(201).json({success:true, person: name})
})

app.post('/api/postman/people', (req, res)=>{
  const {name} = req.body
  if(!name){
    return res.status(400).json({success:false, msg:'please provide name value'})
  }
  res.status(200).json({'success':true, 'data':[...people, name]})
})

app.put('/api/people/:id', (req, res)=>{
  const {id} = req.params
  const{name} = req.body
  const person = people.find((person)=> person.id === Number(id))

  if(!person){
    return res
    .status(400)
    .json({success:false, msg:`no person with id ${id}`})
  }
  const newPeople = people.map((person)=>{
    if(person.id === Number(id)){
      person.name = name
      }
      return person
    })
    res
    .status(200)
    .json({'success':true, data:newPeople})
})

app.delete('/api/people/:id', (req, res)=>{
  const {id} = req.params
  const person = people.find((person)=> person.id === Number(id))

  if(!person){
    return res
    .status(400)
    .json({success:false, msg:`no person with id ${id}`})
  }

  const deletePerson = people.filter((person)=> person.id!==Number(req.params.id));
  return res.status(200).json({success:true, data:deletePerson})
  })
app.listen(port, () =>{
    console.log(`Server is listening on port ${port}`)
})
