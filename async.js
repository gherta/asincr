const fs = require('fs');
const key = {
    key: 'chiave',
}
fs.writeFile('file1.log',JSON.stringify( key ), { encoding: 'utf8' },
    err => {
        console.log(err || "File creato")
    });
console.log("Creazione file effettuata");