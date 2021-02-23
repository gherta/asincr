const fs = require('fs');
const util = require('util');

// Convert fs.readFile into Promise version of same    
const readFile = util.promisify(fs.readFile);

function getdata() {
  return readFile('test.log','utf8',(err, data) => {
    if (err) {
        console.log(err);
    } 
    else{
        console.log(JSON.parse(data));
    };
    })
}
getdata().then(data => {
  console.log(data);
})