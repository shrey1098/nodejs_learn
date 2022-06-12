const express = require("express")
const morgan = require('morgan')
const {logger} = require("./middleware.js")
const {authorize} = require("./authorize.js")
const res = require("express/lib/response")
const app = express()
const port = 4040

//app.use(logger)
//app.use('/api', authorize)
//app.use(express.static('./public'))
app.use(morgan('tiny'))
app.get('/',(req,res)=>{
    res.status(200).json({'Home':true})

})

app.get('/about',(req,res)=>{
    res.send({'about':true})
})

app.get('/api/product',(req,res)=>{
    res.send({'product':true})
})

app.get('/api/user',(req,res)=>{
    res.send({'user': true})
})

app.listen(port, () =>{
    console.log(`Server is listening on port ${port}`)
})
