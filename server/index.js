const express = require('express');
const app = express();
const port = 3001;
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')
//What I put here is the url
app.get('/api/products', getProducts)
app.get('/api/product/:id', getProduct)

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})

