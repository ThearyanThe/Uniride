const mongoose = require('mongoose');
const VehicleSchema = new Schema({
    type: { type: String, enum: ['motorcycle', 'car'], required: true },
    capacity: { type: Number, required: true },
    isFree: { type: Boolean, default: true },
    genderPreference: { type: String, enum: ['male', 'female', 'any'], default: 'any' },
    driver: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    route: { type: String },
    schedule: { type: Date }
  });
  //compile schema to model
const Vehicle=mongoose.model("User",VehicleSchema)
module.exports=Vehicle