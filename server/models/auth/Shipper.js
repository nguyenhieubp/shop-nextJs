const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShipperSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "you need email"],
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    city: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    ward: {
      type: String,
    },
    village: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model("Shipper", ShipperSchema);
