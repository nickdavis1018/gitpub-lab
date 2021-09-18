const express = require('express');
const app = express();
const port = 3000;
const drinks = require('./models/drinks.js')

app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!');
});

app.get('/drinks', (req, res) => {
    res.send(drinks);
});

app.listen(port, () => {
    console.log(`Listening on Port ${port}.`);
});