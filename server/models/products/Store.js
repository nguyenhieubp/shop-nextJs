const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSlice = new Schema(
  {
    products: [],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Store", storeSlice);
