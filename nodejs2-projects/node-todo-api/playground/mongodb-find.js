const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to MongoDB server');


    // Fetch everything in the Todos array
    // db.collection('Todos').find().toArray()
    // .then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });
    
    // Fetch everything in the Todos array that hasn't been completed
    // db.collection('Todos').find({completed: false}).toArray()
    // .then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });
    
    // Fetch Todo by id
    // db.collection('Todos').find({
    //     _id: new ObjectID('5c1d70ab9e024a30dde98be2')
    // }).toArray()
    // .then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    // Count up all of the Todos
    // db.collection('Todos').find().count()
    // .then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });

    // Fetch users with name 'John'
    db.collection('Users').find({name: 'John'}).toArray()
    .then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Users', err);
    });

    // db.close();
});