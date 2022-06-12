const express = require('express')
const app = express()
const path = require('path')
const port = 8000

// set up static and middleware
app.use(express.static('./public'))

//app.get('/', (req, res)=>{
//    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
//})

app.all('*', (req, res)=>{
    res.status(404).send('resource not found')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}....`)
})

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
