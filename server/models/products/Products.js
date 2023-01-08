const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema(
  {
    parameterProduct: [
      {
        image: {
          type: String,
          required: true,
        },
        color: {
          type: String,
          required: true,
        },
      },
    ],
    name: {
      type: String,
      require: true,
    },
    typeProduct: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "you need input price for product"],
    },
    typeSize: {
      type: Array,
    },
    sale: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      max: 5,
      default: 5,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
