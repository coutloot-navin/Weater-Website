const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()
app.use(express.static(path.join(__dirname,'/html')))

const viwesPath = path.join(__dirname,'/templates/views')
const partialsPath = path.join(__dirname,'/templates/partials')

app.set('view engine', 'hbs')
app.set('views', viwesPath)

hbs.registerPartials(partialsPath)

app.get('/home', (req,res) => {
    res.render('home', {
        title : 'Weather App',
        name : 'Navin Bhatotra'
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        title : 'Help Page',
        name : 'Rahul',
        message : 'Hi Navin this side and i need help to make best application using express which very popular now a days.  '
    })
})

app.get('/about', (req,res) => {
    res.send(about.html)
})

app.get('/json', (req, res) => {
    res.send({
        name: "navin" , 
        age : 22
    })
})

app.get('/weather', (req,res) => {
    if(!req.query.address){
        return res.send({
            error : "Please provide a address"
        })
    }

    if(req.query.address === 'Mumbai'){
        res.send({
            forecast : 'It raining',
            location : 'Maharashtra',
            address : req.query.address
        })
    }
    else{
        res.send({
            error : "Address not found"
        })
    }
}) 

app.get('/product', (req,res) => {
    if(!req.query.search){
        return res.send({
            erro : 'Search query was not found'})
    }

    res.send({
        product : []
    })
})

app.get('/help/*', (req,res) => {
    res.render('notFound', {
        message : 'Help article not found'
    })
})

app.get('*', (req,res) => {
    res.render('notFound', {
        message : 'Page not found 404 error'
    })
})

app.listen(3000, () => {
    console.log('Server is Up on 3000')
})