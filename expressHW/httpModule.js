// Use the HTTP module to make a request to "http://omdbapi.com/?i=tt0241527" and store the data in an array. 
// Once the first request is finished, make another request to "http://omdbapi.com/?i=tt0295297" and add the data to 
// the same array. When the second request is finished, console.log the array with the data. Callbacks!!!

var http = require('http');

var array = [];

// make a request

http.get("http://omdbapi.com/?i=tt0241527", function (res){
  res.setEncoding("utf8");
  res.on("data",function(data){
    // console.log("HERE COMES THE DATA"  + data);
    array.push(data);
  });
  // Once the first request is finished, make another request to "http://omdbapi.com/?i=tt0295297" 
  res.on("end", function(){
    // console.log(array);
          http.get("http://omdbapi.com/?i=tt0295297", function (res){
          res.setEncoding("utf8");
          res.on("data",function(data){
            // console.log("HERE COMES THE DATA"  + data);
            array.push(data);
          });
          // Once the first request is finished, make another request to "http://omdbapi.com/?i=tt0295297" 
          res.on("end", function(){
            console.log(array);
          });

        });

  });

});


