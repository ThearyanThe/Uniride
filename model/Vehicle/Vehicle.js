const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const VehicleSchema = new Schema({
    type: { type: String, enum: ['motorcycle', 'car'], required: true },
    capacity: { type: Number, required: true },
    isFree: { type: Boolean, default: true },
    genderPreference: { type: String, enum: ['male', 'female', 'any'], default: 'any' },
    driver: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    route: { type: String },
    schedule: { type: Date }
  },{timestamps:true});
  //compile schema to model
const Vehicle=mongoose.model("Vehicle",VehicleSchema)
module.exports=Vehicle