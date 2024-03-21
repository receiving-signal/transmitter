const { spawn } = require('child_process');

const transmit = spawn('python3', ['transmit.py']);
transmit.stdout.on('data', function(data) {
    console.log(data);
});