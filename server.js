const express = require('express')
const path = require('path')
const app = express()
const { data, contains } = require('jquery')
const request = require('request')
let recipesApi = ' https://recipes-goodness.herokuapp.com/recipes/'

app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))

// app.get('/sanity', function (request, response) {
//     response.send("ok")
// })
app.get('/recipes/:ingredient', function (req, res) {
    let mainIngredient = req.params.ingredient
    recipesApi = recipesApi + mainIngredient
    let recipesBase
    request(recipesApi, function (error, response, body) {
        recipesBase = JSON.parse(body).results
        res.send(recipesBase)
    });
})


const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})
