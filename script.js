const { spawn } = require('child_process');
const words = []; // Store readings

const transmit = spawn('python3', ['transmit.py']);
transmit.stdout.on('data', function(data) {
    
    // Coerce Buffer object to Float
    words.push(parseFloat(data));

    // Log to debug
    console.log(words);
});