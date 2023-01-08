const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const adminSchema = new Schema(
  {
    email: {
      type: String,
      min: 6,
      max: 12,
    },
    password: {
      type: String,
      min: 6,
      max: 12,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Admin", adminSchema);
