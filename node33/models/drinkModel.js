const mongoose = require("mongoose");
const Joi = require("joi");

let schema = new mongoose.Schema({
  item: String,
  price: Number,
  quantity: Number,
  date: {
    type: Date, default: Date.now
  },
})
exports.DrinkModel = mongoose.model("drinks", schema)

exports.validateDrink = (_reqBody) => {
  let joiSchema = Joi.object({
    item: Joi.string().min(2).max(400).required(),
    price: Joi.number().min(1).max(999).required(),
    quantity: Joi.number().min(1).max(999).required(),
  })
  return joiSchema.validate(_reqBody)
}