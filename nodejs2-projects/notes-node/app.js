console.log('Starting app.js');

// Third Party - Node Modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

// My Modules
const notes = require('./notes.js');

let titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

let bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
};

let argv = yargs
    .command('add', 'Add a new Note', {
        title: titleOptions ,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('remove', 'Remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
let command = argv._[0];
console.log(`Command: ${command}.`);
console.log(`Yargs: ${argv}.`);

if (command === 'add') {
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log(`Note created`);
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    let allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach(note => notes.logNote(note));
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
