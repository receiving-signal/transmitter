import { BSON, ObjectId } from 'bson';

const { spawn } = require('child_process');
const transmit = spawn('python3', ['transmit.py']);
transmit.stdout.on('data', function(data) {
    // Log to debug
    d1 = BSON.serialize(data);
    d2 = BSON.deserialize(d1);
    console.log(d2);
});