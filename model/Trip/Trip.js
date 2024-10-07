const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TripSchema = new Schema({
  driver: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  passengers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  route: { type: String, required: true },
  schedule: { type: Date, required: true },
  status: { type: String, enum: ['scheduled', 'in_progress', 'completed', 'cancelled'], default: 'scheduled' },
  createdAt: { type: Date, default: Date.now }
},{timestamps:true});
//compile schema to model
const Trip=mongoose.model("Trip",TripSchema)
module.exports=Trip