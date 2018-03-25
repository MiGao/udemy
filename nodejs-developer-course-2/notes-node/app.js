console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();

const errorCallback = function(err) {
    if (err) {
        console.log('Unable to write to file');
    }
}

console.log('Result:', notes.add(9, -2));
console.log('two', 'words');
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, errorCallback);
