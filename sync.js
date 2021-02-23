const fs = require('fs');
const key = {
    key: 'chiave',
}
fs.writeFileSync('file.log', JSON.stringify(key));
 
console.log("Creazione file effettuata")