const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RatingSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
    createdAt: { type: Date, default: Date.now }
  });
//compile schema to model
const Rating=mongoose.model("Rating",RatingSchema)
module.exports=Rating