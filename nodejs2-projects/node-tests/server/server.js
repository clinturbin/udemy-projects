const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([
        {name: 'Max', age: 27},
        {name: 'John', age: 30},
        {name: 'Jane', age: 28}
    ]);
});

app.listen(3000);
module.exports.app = app;