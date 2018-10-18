var express = require('express');
var Record = require("../models/Record")


module.exports = (app,io) => {

  app.get("/",function (req,res) {

    var time = []
    var count = []
  res.render("index",{time:time,count:count})
  
  })
  
  app.get("/api/:collection/:in/:of",function (req,res) {

    Record.aggregate([{$match:{[req.params.in] : req.params.of}},
        {$group:{ 
              _id : "$"+req.params.collection,
               total : {$sum : 1}}},
               {$sort: {_id: 1}}])
               .exec((err,data) => {
              if (err) {console.log(err)}
              console.log("starting socket");

              io.sockets.emit('update');
              res.json(data);      
       })
  })


  app.get("/addRecord",function (req,res) {
      res.render("addForm")
  })



  app.post("/addRecord",function (req,res) {

    var newRecord = {
      type:req.body.type,
      gender:req.body.gender,
      age:req.body.age,
      timeSpent:req.body.timeSpent,
      arrivedAt:req.body.arrivedAt
    }
   
    Record.create(newRecord,function(err,record){
      if (err) {console.log(err)} 
        console.log(record)
        res.redirect("back")
      })
   
   })
  

}

