const axios = require("axios");
const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/products', async(req, res) => {
    try{
        const result = await axios('https://northwind.vercel.app/api/products');
        res.json({data: result.data});
    }
    catch (e){
        res.json({message: e.message});
    }
})

app.get(`/products/:id`, async(req, res) => {
    let id = req.params.id;
    try{
        const result = await axios(`https://northwind.vercel.app/api/products/${id}`);
        res.json({data: result.data});
    }
    catch (e){
        res.json({message: e.message});
    }
})

app.delete(`/products/:id`, async(req, res) => {
    let id = req.params.id;
    try{
        const result = await axios.delete(`https://northwind.vercel.app/api/products/${id}`);
        res.json({message: 'success'})
    }
    catch (e){
        res.json({message: e.message});
    }
})

app.post('/add', async (req, res) => {
    try{
        const result = req.body;
        const a = await axios.post('https://northwind.vercel.app/api/products', result)
        return res.json({message: 'success'})
    }
    catch (e){
        console.log()
        return res.json({message: e.message})
    }
})


app.listen(8080, () => {
    console.log('I am listening babe')
})