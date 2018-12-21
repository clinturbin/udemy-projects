const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert Todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name: 'John',
        age: 33,
        location: 'Timbuctoo'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert User', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});