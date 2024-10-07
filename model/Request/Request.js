const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RequestSchema = new Schema({
    requester: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    driver: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
    route: { type: String },
    schedule: { type: Date }
  },{timestamps:true});
  //compile schema to model
const Request=mongoose.model("Request",RequestSchema)
module.exports=Request