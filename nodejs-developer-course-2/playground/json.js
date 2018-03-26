// const obj = {
//     name: 'Mike',
// };
// const stringObj = JSON.stringify(obj);

// console.log(`typeof: ${typeof stringObj}`);
// console.log(stringObj);

// const personString = '{"name": "Mike", "age": 30}';

// const personObj = JSON.parse(personString);

// console.log(`personString: ${personString}`);
// console.log(`personObj: ${personObj}`);
// console.log(`personObj: ${personObj.toString()}`);

const fs = require('fs');

const originalNote = {
    title: 'Some title',
    body: 'Some body'
};

const originalNoteString = JSON.stringify(originalNote);
const notesFileName = 'notes.json';

fs.writeFileSync(notesFileName, originalNoteString);

const noteString = fs.readFileSync(notesFileName);
const note = JSON.parse(noteString);

console.log(`typeof note: ${typeof note}`);
console.log(note.title);
