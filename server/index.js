var express = require('express');
var mongoose = require('mongoose');
var app = express();
var Location = require('./models/Location');
var locattionapi = require('./RESTApis/Location');
var Dish = require('./models/Dish');
var dishapi = require('./RESTApis/Dish');
// var Restaurant = require('./models/Restaurant');
mongoose.connect('mongodb://localhost:27017/reactswiggy', {useNewUrlParser: true,useUnifiedTopology: true});

/*const dish1 = new Dish({

  name:"Panner tikka",
  price:200,
  isveg:true
  
  });

  const dish2 = new Dish({
    name:"chicken tikka",
    price:300,
    isveg:false
  })

  */

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
 // we're connected!
  //dish1.save();
  //dish2.save();

});

app.use(express.json());

app.use('/locations',locattionapi);
app.use('/dishes',dishapi)


app.listen(3001, ()=>
{
  console.log("server started at port");
});
