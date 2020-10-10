const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  product_id: {
    type: String,

    trim: true,
    minlength: 1,
  },
  product_name: {
    type: String,

    trim: true,
    minlength: 1,
  },
  lead_time: {
    type: String,
    trim: true,
    minlength: 1,
  },
  weight_gsm: {
    type: String,

    trim: true,
    minlength: 1,
  },
  quantity: {
    type: String,

    trim: true,
    minlength: 1,
  },
  price_rs: {
    type: String,

    trim: true,
    minlength: 1,
  },
  buyer_name: {
    type: String,

    trim: true,
    minlength: 1,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
