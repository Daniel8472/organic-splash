const path = require('path')
const express = require('express')
const hbs = require('hbs')
//database connection
require('./db/mongoose')

const getProduct = require('./utils/createProducts')

const port = process.env.PORT || 3000

const productsRouter = require('./routers/products')

const app = express()


//define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.json())

//setup static directory to serve
app.use(express.static(publicDirectoryPath))
app.use(productsRouter)



app.get('', (req, res) => {
    res.render('index', {
        //title: 'Home',
        name: 'Danny'
    })

    
})

app.get('/products', (req, res) => {
    
    res.render('products', {

    })
    
    

})

app.get('/catalogue/', (req, res) => {
    console.log(req.query)

    

    getProduct(req.query).then((result) => {
        console.log(result)
        res.send(result)
    }).catch((e) => {
        console.log(e)
    })


    
})



app.listen(port, () => {
    console.log('Server is up on port' + port)
})
