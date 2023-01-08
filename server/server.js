const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
app.use(express.json());
app.use(cors());
//ConnectDB
const connectDB = require("./configs/connectDB");
connectDB();

//Router
const routerAuthAdmin = require("./routers/auth/admin.router");
const routerAuthShipper = require("./routers/auth/shipper.router");
const routerProduct = require("./routers/products/product.router");
const routerReceipt = require("./routers/products/receipt.router");
const routerBillRoot = require("./routers/products/billRoot.router");
const routerStore = require("./routers/products/store.router");

app.use("/api/v1/auth/admin", routerAuthAdmin);
app.use("/api/v1/auth/shipper", routerAuthShipper);
app.use("/api/v1/product", routerProduct);
app.use("/api/v1/receipt", routerReceipt);
app.use("/api/v1/billRoot", routerBillRoot);
app.use("/api/v1/store", routerStore);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(3000, () => {
  console.log(`Backend Start`);
});
