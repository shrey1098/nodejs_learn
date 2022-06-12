const express = require("express")
const app = express()
const port = 4000
const { products} = require('./data')

app.get('/', (req, res)=>{
    res.status(200).send('<h1>homepage!</h1><a href="/api/product">products</a>')
})


app.get('/api/product', (req, res)=>{
    const newProduct = products.map((product)=>{
        const{id,name} = product;
        return {id, name}
    })
    res.status(200).json(newProduct)
})

//params
app.get('/api/product/:productID', (req, res)=>{
    const {productID}= req.params;
    console.log(productID)
    const singleProduct = products.find((product)=>product.id === Number(productID))
    if (!singleProduct){
        return res.status(404).send('does not exist')
    }
    res.status(200).json(singleProduct)
})

//query params
app.get('/api/v1/query',(req,res)=>{
    console.log(req.query)
    const {search, limit}= req.query
    let sortedProducts = [...products];
    if (search){
        sortedProducts = sortedProducts.filter((product)=>{
            product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if(sortedProducts.length<1){
        return res.status(200).json({success:true, data:[]})
    }
    res.status(200).json(sortedProducts)
})
app.listen(port, () =>{
    console.log(`Server is listening on port ${port}`)
})
