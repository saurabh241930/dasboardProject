var express = require('express');
var router = express.Router();
var Record = require("../models/Record")

/* GET home page. */
app.get("/",function (req,res) {

  var time = []
  var count = []
res.render("index",{time:time,count:count})

})

router.get("/api/:collection/:in/:of",function (req,res) {
  Record.aggregate([{$match:{[req.params.in] : req.params.of}},
      {$group:{ 
            _id : "$"+req.params.collection,
             total : {$sum : 1}}},
             {$sort: {_id: 1}}])
             .exec((err,data) => {
            if (err) {console.log(err)}
            res.json(data)
     })
})

module.exports = router;
