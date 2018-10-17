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
 | **`/api/gender/type/customer`**             | collection of customers based on their gender|

suppose you want a collection of customers based on their gender

`/api/gender/type/customer`

or you want the collection of visitors by arrival time

`/api/arrivedAt/type/customer`


