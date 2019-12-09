var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");


var Location = require("./../models/Location");

router.get("/:location",function(req,res)
{
    Location.find({ name: req.params.location },(err,docs)=>
    {
        if(err){
            res.send(err)
        }
        res.send(docs);
    });
});

router.get("/",function(req,res)
{
    Location.find({},(err,docs)=>
    {
        if(err){
            res.send(err)
        }
        res.send(docs);
    });
});

//new
router.post("/", function(req,res){
    const newName = req.body.name;
    const newLocation = new Location({ name: newName });
    newLocation.save((err, docs)=>
    {
        if(err){
            res.send(err)
        }
        res.send(docs);
    })
});

//update
router.put("/:identifier", function(req,res){
    const locationId = req.params.identifier
    const newName = req.body.name;

    Location.findByIdAndUpdate(locationId, { name: newName }, (err, docs)=>
    {
        if(err){
            res.status(404).send({msg: "Not found"})
        }
        res.send(docs);
    })
});

module.exports = router;