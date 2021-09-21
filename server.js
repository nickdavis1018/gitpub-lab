const express = require('express');
const app = express();
const port = 3000;
const drinks = require('./models/drinks.js')
const foods = require('./models/foods.js')

for (let i=0; i < drinks.length; i++){
    drinks[i].image = drinks[i].image.slice(0, -3) + "png"
}

for (let i=0; i < foods.length; i++){
    foods[i].image = foods[i].image.slice(0, -3) + "png"
}

app.get('/', (req, res) => {
    res.render("master_index.ejs", {allFoods: foods, allDrinks: drinks})
});

app.get('/drinks', (req, res) => {
    res.render("drinks_index.ejs", {allDrinks: drinks});
});

app.get('/foods', (req, res) => {
    res.render("foods_index.ejs", {allFoods: foods});
});

app.get('/drinks/:id', (req, res) => {
    res.render("drinks_show.ejs", {drink: drinks[req.params.id], number: req.params.id});
});

app.get('/foods/:id', (req, res) => {
    res.render("foods_show.ejs", {food: foods[req.params.id], number: req.params.id});
});

app.listen(port, () => {
    console.log(`Listening on Port ${port}.`);
});