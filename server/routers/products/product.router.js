const express = require("express");
const router = express.Router();

const controllerProducts = require("../../controllers/products/product");
const verifyToken = require("../../middlewares/verifyToken");

router.get("/", controllerProducts.getAllProducts);
router.get("/:id", controllerProducts.getProduct);
router.post("/create", verifyToken, controllerProducts.createProduct);
router.put("/:id", verifyToken, controllerProducts.updateProduct);
router.delete("/:id", verifyToken, controllerProducts.deleteProduct);

module.exports = router;
