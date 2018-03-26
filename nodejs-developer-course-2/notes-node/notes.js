console.log('Starting notes.js');

const fs = require('fs');

const notesFileName = 'notes-data.json';

var addNote = (title, body) => {
    var notes = [];
    const note = {
        title,
        body,
    };

    try {
        const notesString = fs.readFileSync(notesFileName);
        notes = JSON.parse(notesString);
    } catch (e) {

    }

    const duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFileSync(notesFileName, JSON.stringify(notes));
    }
};

var getAll = () => {
    console.log('All your notes are belong to us!');
};

var getNote = (title) => {
    console.log(`Reading ${title}`);
};

var remove = (title) => {
    console.log(`Removing ${title}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    remove,
};
