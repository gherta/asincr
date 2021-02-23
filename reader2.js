const fs = require('fs');
 
fs.readFile('file1.log','utf8', (err, data) => {
    if (err) {
        console.log(err);
    } 
    else{
        console.log(JSON.parse(data));
    }
});