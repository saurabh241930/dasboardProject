# dasboardProject

to use api

**`/api/(specify collection)/(specify category)/(sub category)`**


**usage**

 | API                                         | Description|
 |---------------                              | -----------|
 | **`/api/arrivedAt/type/customer`**          | collection of customers by arrival time|
 | **`/api/gender/type/customer`**             | collection of customers based on their gender|
 | **`/api/arrivedAt/type/visitors`**          | collection of visitors by arrival time|
 | **`/api/gender/type/visitors`**             | collection of visitors based on their gender|






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

