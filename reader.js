const fs = require('fs');
let file = fs.readFileSync('file.log','utf8');
console.log(JSON.parse(file));