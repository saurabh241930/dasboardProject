var bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  express = require('express')

  app = express();


var Record = require('./models/Record');



mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/dasboard',{ useNewUrlParser: true });

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get("/",function (req,res) {

      var time = []
      var count = []
 res.render("home",{time:time,count:count})
    
})

app.get("/lineChart/:type",function (req,res) {
  Record.aggregate([
    {
      $match: 
      {type: req.params.type}
    },
      {
         $group:{ 
            _id : "$arrivedAt",
             total : {$sum : 1}
        }
      },{
      $sort: {_id: 1}
    }
      ]).exec((err,data) => {
            if (err) {console.log(err)} 
               
              var time = [];
              var count = [];

              data.forEach(function(e){
                time.push(e._id)
                count.push(e.total)
              })
            
              res.render("home",{time:time,count:count})
      
        })
 
})


app.get("/recordForm",function (req,res) {
 res.render("recordForm")
})


// db.getCollection('records').aggregate([
//   {$group : 
//       { _id : "$gender",
//           total : {$sum : 1}
//           }
//       }])


  // Record.aggregate([
  //   {$match: {type: "visitor"}},
  //   {$group:{ 
  //     _id : "$arrivedAt",
  //     total : {$sum : 1}
  //     }},{$sort: {_id: 1}}
  //     ]).exec((err,data) => {
  //           if (err) {console.log(err)} 
               
  //             var arr1 = [];
  //             var arr2 = [];

  //             data.forEach(function(e){
  //                 arr1.push(e._id)
  //                 arr2.push(e.total)
  //             })
  //             var result = arr1.map((cur, idx) => [cur, arr2[idx]]);
  //             console.log(result);
      
  //       })



app.post("/addRecord",function (req,res) {

	


 var newRecord = {
 	type:req.body.type,
   gender:req.body.gender,
   age:req.body.age,
   timeSpent:req.body.timeSpent,
   arrivedAt:req.body.arrivedAt
 
 }

 Record.create(newRecord,function(err,record){
 	if (err) {
 		console.log(err)
 	} else {

 		console.log(record)
 	}
 })

res.redirect("back")

})




app.get("/:region",function (req,res) {
    
   Record.find({"regionName":req.params.region},function (err,records) {
      if (err) {
      	console.log(err)
      } else {

     

         res.json(records)
      }
   })
})





app.listen(3000, function() {
  console.log('Server started');
});