var fs = require('fs');
const data = fs.readFileSync('file.txt');
console.log(data.toString());