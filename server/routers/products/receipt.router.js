const express = require("express");
const router = express.Router();

const routerProduct = require("../../controllers/products/receipt");

router.get("/", routerProduct.getReceipt);
router.post("/create", routerProduct.createReceipt);

module.exports = router;
