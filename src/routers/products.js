const express = require('express')
const Product = require('../models/product')
const router = new express.Router()

//create new product
router.post('/catalogue', async(req, res) => {
    const product = new Product({
        ...req.body
    })
    
    try {
        await product.save()
        res.status(201).send(product)
    } catch (e) {
        res.status(400).send()
        console.log(e)
    }
})

//find product by id
router.get('/catalogue/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const product = await Product.findOne({_id})

        if(!product) {
            return res.status(404).send()
        }

        res.send(product)
    } catch (e) {
        res.status(500).send()
    }
})



module.exports = router