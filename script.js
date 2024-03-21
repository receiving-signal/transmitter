const { spawn } = require('child_process');

const transmit = spawn('python3', ['transmit.py']);
transmit.stdout.on('data', function(data) {
    // Log to debug
    d1 = JSON.stringify(data);
    d2 = JSON.parse(d1);
    console.log(d2);
});