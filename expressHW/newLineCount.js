var fs = require('fs');

// pass in utf-8 to have it be readbale
// var file = fs.readFileSync(process.argv[2], "utf-8");


fs.readFile(process.argv[2], "utf-8", function (err,data){
  console.log(data.match(/\n/g).length);
});

var file = fs.readFileSync(process.argv[2]);


// console.log(file.toString());


// console.log("AFTER THE READ!!!");

// fs.readFile("text.txt", "utf-8", function (err,data){
//   console.log(data);
// });



// console.log(file);

//use regex to count line #'s

// console.log(file.match(/\n/g).length);

