const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billRootSchema = new Schema(
  {
    shipper: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Shipper",
      required: true,
    },
    receipt: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Receipt",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("BillRoot", billRootSchema);
