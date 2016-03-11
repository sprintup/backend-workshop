var fs = require('fs');
var arrayOfSubstrings = fs.readFileSync(process.argv[2]).toString().split("\n");
console.log(arrayOfSubstrings.length-1);