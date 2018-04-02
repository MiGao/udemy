console.log('Starting notes.js');

const fs = require('fs');

const notesFileName = 'notes-data.json';

const fetchNotes = () => {
    try {
        const notesString = fs.readFileSync(notesFileName);
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync(notesFileName, JSON.stringify(notes));
};

var addNote = (title, body) => {
    const notes = fetchNotes();
    const note = {
        title,
        body,
    };
    const duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    const notes = fetchNotes();
    const filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

var remove = (title) => {
    const notes = fetchNotes();
    const filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

module.exports = {
    addNote,
    getAll,
    getNote,
    remove,
};
