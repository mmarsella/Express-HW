var fs = require('fs');

// pass in utf-8 to have it be readbale
var file = fs.readFileSync(process.argv[2], "utf-8");



// console.log(file);

//use regex to count line #'s

console.log(file.match(/\n/g).length);

