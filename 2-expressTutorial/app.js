const express = require("express")
const app = express()
const morgan = require('morgan')
const port = 4040
const people = require('./routes/people')
const login = require('./routes/auth')

app.use(morgan('tiny'))
//static assets
app.use(express.static('./methods-public'))
// middleware to access req.body
app.use(express.urlencoded({extended: false}))
//parse json
app.use(express.json())
//Routers
app.use('/api/people',people)
app.use('/login', login)

app.listen(port, () =>{
    console.log(`Server is listening on port ${port}`)
})
