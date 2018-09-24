console.log('Starting app.js');

// Third Party - Node Modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

// My Modules
const notes = require('./notes.js');

//--------------------------------------------
//        Access command line input
//-------------------------------------------
// console.log(process.argv); => returns array of three objects
// ex node app.js list
// let command = process.argv[2];
// console.log(`Command: ${command}.`);

// if (command === 'add') {
//     console.log('Adding new note');
// } else if (command === 'list') {
//     console.log('Listing all notes');
// } else if (command === 'read') {
//     console.log('Reading a note');
// } else if (command === 'remove') {
//     console.log('Removing Note');
// } else {
//     console.log('Command not recognized');
// }


//-------- Using yargs -----------------------
// node app.js remove --title="secrets"
// console.log(process.argv); => returns array of 4 objects
let argv = yargs.argv;
let command = argv._[0];
console.log(`Command: ${command}.`);
console.log(`Yargs: ${argv}.`);  
// Should log ['/Users...', 'Users...', ['remove'], title: secrets, $0: app.js]

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log(`Note created`);
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    let note = notes.getNote(argv.title);
    if (note) {
        console.log(`Note Found`);
        notes.logNote(note);
    }
} else if (command === 'remove') {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message); 
} else {
    console.log('Command not recognized');
}

// node app.js add --title="secret" --body="This is my secret"
// logs Adding Note secret This is my secret

// node app.js list
// logs Getting all notes

// node app.js read --title="secret"
// logs Getting Note: secret

// node app.js remove --title="secret"
// logs Removing Note: secret


//-----------------------------------------
//      WORKING WITH JSON
//----------------------------------------

