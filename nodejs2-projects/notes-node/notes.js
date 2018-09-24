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

let getAll = () => fetchNotes();

let getNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter(note => note.title === title);
    return filteredNotes[0];
};

let removeNote = (title) => {
    let notes = fetchNotes();
    let newNotes = notes.filter(note => note.title !== title)
    saveNotes(newNotes);
    return notes.length !== newNotes.length;
};

let logNote = (note) => {
    // debugger;
    // Break on this line and use repl to output the note
    // node inspect app.js read --title="to buy"
    // this opens node in debugger mode
    // use repl
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