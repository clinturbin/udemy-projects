console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// Original Line (produces error)
// fs.appendFile('greetings.txt', 'Hello World!');

// Option 1
// fs.appendFile('greetings.txt', 'Hello World 2!', (error) => {
//     if (error) {
//         console.log('Unable to write File');
//     }
// });
// Option 2
// fs.appendFileSync('greetings.txt', 'Hello World 3!');

// let user = os.userInfo();
// console.log(user);  // This prints an object to the screen
// let message = `Hello ${user.username}! You are ${notes.age}.`;
// fs.appendFileSync('greetings.txt', message);


// let result = notes.addNote();
// console.log(result);

let sum = notes.add(5, 10);
console.log(sum);

// -- Lodash --
// console.log(_.isString(true)); //=> false
// console.log(_.isString('hello')); //=> true

// return array with no duplicates
let filteredArray = _.uniq([1,1,1,2,2,'C-Bot', 'C-Bot']);
console.log(filteredArray);

