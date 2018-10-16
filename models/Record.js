var mongoose = require('mongoose');

var RecordSchema = new mongoose.Schema({

      type:String,
      gender:String,
      age:Number,
      timeSpent:Number,
      arrivedAt:Number

})

module.exports = mongoose.model("Record", RecordSchema);