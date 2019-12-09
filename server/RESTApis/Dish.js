var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Dish = require("./../models/Dish");


router.get('/', function(req, res){
    
    Dish.find({}, function (err, docs) {
        if (err) {
            res.send("Error");
             }
             res.send(docs);
    }
  )
});
module.exports = router;