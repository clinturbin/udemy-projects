const express = require('express');
const hbs = require('hbs');

let app = express();

let currentYear = new Date().getFullYear();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home',
        welcomeMessage: 'Welcome to the Home Page',
        currentYear: currentYear
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: currentYear
    });
});

app.get('/bad', (req, res) => {
    res.send({
        error: 404,
        errorMessage: 'Error 404: Page Not Found'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});