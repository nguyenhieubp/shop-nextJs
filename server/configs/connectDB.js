const mongoose = require("mongoose");

const connectDB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect("mongodb://localhost:27017")
    .then(() => console.log("connecting DB"))
    .catch(() => console.log("not connect DB"));
};

module.exports = connectDB;
