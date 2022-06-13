import express from "express";
import morgan from "morgan";
import {people} from'./routes/people.js';
import {login} from './routes/auth.js';

const app = express()
const port = 8000


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
