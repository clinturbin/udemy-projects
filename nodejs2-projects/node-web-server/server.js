const express = require('express');

let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('Hello Express!');
    res.send({
        name: 'C-Bot',
        likes: ['pizza', 'Final Fantasy', 'psych', 'New Model Army']
    });
});

app.get('/about', (req, res) => {
    res.send('About Page');
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