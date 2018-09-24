// let obj = {
//     name: 'C-Bot'
// };

// let stringObject = JSON.stringify(obj);
// console.log(typeof stringObject);
// // logs string
// console.log(stringObject);
// // logs {"name": "C-Bot"}

// let personString = '{"name":"C-Bot", "age":37}';
// let person = JSON.parse(personString);
// console.log(typeof person);
// // logs object
// console.log(person);
// // logs {name: 'C-Bot', age: 37}


const fs = require('fs');

let originalNote = {
    title: 'Some title',
    body: 'Some body'
};

let originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

let noteString  = fs.readFileSync('notes.json');

let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note);
