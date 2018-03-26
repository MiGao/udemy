console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log(`Adding note, title: ${title}, body: ${body}`);
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
