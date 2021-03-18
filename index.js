const wilderInfoImport = require('./information.js');
const cowsay = require('cowsay')
console.log(cowsay.say({
    text: `Hello I'm ${wilderInfoImport.name} from ${wilderInfoImport.campus}!`,
    e: "00",
    T: "||"
}));
