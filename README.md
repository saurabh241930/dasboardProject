# dasboardProject

to use api

**`/api/(specify collection)/(specify category)/(sub category)`**

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

**usage**

 | API                                         | Description|
 |---------------                              | -----------|
 | **`/api/arrivedAt/type/customer`**          | collection of customers by arrival time|
 | **`/api/gender/type/customer`**             | collection of customers based on their gender|
 | **`/api/arrivedAt/type/visitors`**          | collection of visitors by arrival time|
 | **`/api/gender/type/visitors`**             | collection of visitors based on their gender|

suppose you want a collection of customers based on their gender

`/`

or you want the collection of visitors by arrival time

`/r`


