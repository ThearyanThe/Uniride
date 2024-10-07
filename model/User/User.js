const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female'], required: true },
  isDriver: { type: Boolean, default: false },
  vehicle: { type: Schema.Types.ObjectId, ref: 'Vehicle' },
  profilePicture: { type: String },
  bio: { type: String },
  ratings: [{ type: Schema.Types.ObjectId, ref: 'Rating' }],
  travelHistory: [{ type: Schema.Types.ObjectId, ref: 'Request' }],
  passwordResetToken:{
    type:String
},
passwordResetExpires:{
    type:Date
},
accountVerificationToken:{
    type:String
},
accountVerificationExpires:{
    type:Date
},

  role:{
    type:String,
    require:true,
    enum:["admin","user"],
    default:"user"
},

lastLogin:{
    type:Date,
    default:Date.now()
},
isVerified:{
    type:String,
    default:false
},
accountLevel:{
    type:String,
   enum:["bronze","silver","gold"],
   default:"bronze"
},
},{timestamps:true})
//compile schema to model
const User=mongoose.model("User",categorySchema)
module.exports=User