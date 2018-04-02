console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

const command = argv._[0];

console.log('Command:', command);
console.log('yargs', argv);

if (command === 'add') {
    const note = notes.addNote(argv.title, argv.body);
    const message = note ?
        `Saved note: ${JSON.stringify(note)}` :
        `${argv.title} already exists, add aborted`;
    console.log(message);
} else if (command === 'list') {
    const allNotes = notes.getAll();
    console.log(allNotes);
} else if (command === 'read') {
    const note = notes.getNote(argv.title);
    printMessage(note, note, `${argv.title} not found`);
} else if (command === 'remove') {
    const didRemove = notes.remove(argv.title);
    const message = didRemove ?
        `"${argv.title}" removed` :
        `"${argv.title}" not found`;
    console.log(message);
} else {
    console.log('Unknown command:', command);
}

const printMessage = function(condition, trueMessage, falseMessage) {
    const message = condition ?
        trueMessage :
        falseMessage;
    console.log(message);
}