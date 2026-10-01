const importeData = require('./export.js');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');



chalk.blue('This is import.js file');
console.log(importeData.str1);
console.log(importeData.num);
console.log(importeData.bool);  

console.log(fs.readFileSync(path.join(__dirname, 'export.js'), 'utf8'));

