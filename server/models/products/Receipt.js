const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const receiptSchema = new Schema(
  {
    products: [
      {
        name: String,
        size: String,
        color: String,
        quantity: Number,
      },
    ],
    totalMoney: {
      type: Number,
      default: 0,
    },
    nameUserBuy: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Receipt", receiptSchema);
