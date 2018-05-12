const fs = require('fs');
const path = process.argv[2];
const buf = fs.readFileSync(path);

let str = buf.toString();
let line = str.split(/\n/);
let lines = line.length;

console.log(line.length -1);
