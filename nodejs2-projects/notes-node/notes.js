console.log('Starting notes.js');
const fs = require('fs');


let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json')
        return notes = JSON.parse(notesString)
    } catch (e) {
        return [];
    }
};

let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };
    let duplicateNotes = notes.filter(note => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

let getAll = () => {
    console.log('Getting all notes');
};

let getNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter(note => note.title === title);
    return filteredNotes[0];
};

let removeNote = (title) => {
    // fetch notes
    let notes = fetchNotes();
    //filter notes, removing the one with ttitle of argumnet
    let newNotes = notes.filter(note => note.title !== title)
    // save new notes array
    saveNotes(newNotes);
    return notes.length !== newNotes.length;
};

let logNote = (note) => {
    console.log('-------------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};