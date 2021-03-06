// requirements
var express = require('express'),
  app = express();

  //set view engine to ejs
app.set('view engine', 'ejs');

app.get('/:operator/:var1/:var2', function (req,res){

  var operator = req.params.operator;
  var varOne = req.params.var1;
  var varTwo = req.params.var2;
  var result;

  if(operator == "add")
  {
    result = parseFloat(varOne) + parseFloat(varTwo);
  }
  else if(operator == "subtract")
  {
    result = parseFloat(varOne) - parseFloat(varTwo);

  }
  else if(operator == "mult")
  {
    result = parseFloat(varOne) * parseFloat(varTwo);
  }
  else if(operator == "div")
  {
    result = parseFloat(varOne) + parseFloat(varTwo);
  }
  else
  {
    result = "Please specify a proper operator!!!";
  }

  res.render("index", {sum: result});

});


// app.get('/', function(req, res){
//   // use res.render
//   res.render('index', {name: "Elie"});
// });

// app.get('/add/:var1/:var2', function (req,res){

//   var that = req.params.add;
//   var varOne = req.params.var1;
//   var varTwo = req.params.var2;
//   var sum = parseInt(varOne) + parseInt(varTwo);

//   res.render("index", {sum: sum});
// });


// app.get('/subtract/:var1/:var2', function (req,res){

//   var varOne = req.params.var1;
//   var varTwo = req.params.var2;
//   var result = parseInt(varOne) - parseInt(varTwo);

//   res.render("index", {sum: result});
// });

// app.get('/div/:var1/:var2', function (req,res){

//   var varOne = req.params.var1;
//   var varTwo = req.params.var2;
//   var quotient = parseInt(varOne) / parseInt(varTwo);

//   res.render("index", {sum: quotient});
// });

// app.get('/mult/:var1/:var2', function (req,res){

//   var varOne = req.params.var1;
//   var varTwo = req.params.var2;
//   var product = parseInt(varOne) * parseInt(varTwo);

//   res.render("index", {sum: product});
// });


// start the server
app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});
