# dasboardProject

to use api

**`/api/(specify collection)/(specify category)/(sub category)`**


**usage**

 | API                                         | Description|
 |---------------                              | -----------|
 | **`/api/arrivedAt/type/visitors`**          | collection of visitors by arrival time|
 | **`/api/arrivedAt/type/customer`**          | collection of customers by arrival time|
 | **`/api/arrivedAt/gender/male`**            | collection of males by arrival time|
 | **`/api/arrivedAt/gender/female`**          | collection of females by arrival time|
 | **`/api/gender/type/customer`**             | collection of customers based on their gender|
 | **`/api/gender/type/visitors`**             | collection of visitors based on their gender|
 | **`/api/age/type/visitors`**                | collection of visitors by ages|
 | **`/api/age/type/customers`**               | collection of customers based on their gender|
 | **`/api/age/gender/male`**                  | collection of males by ages|
 | **`/api/age/gender/female`**                | collection of females by ages|
 | **`/api/timeSpent/type/visitors`**          | collection of time spent by visitors|
 | **`/api/timeSpent/type/customers`**         | collection of time spent by customers |
 | **`/api/timeSpent/gender/male`**            | collection of time spent by males|
 | **`/api/timeSpent/gender/female`**          | collection of time spent by females|


API code
```javascript
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
```


**Model Structure**

```javascript
var RecordSchema = new mongoose.Schema({

      type:String,
      gender:String,
      age:Number,
      timeSpent:Number,
      arrivedAt:Number

})
```

