const express = require("express");
const router = express.Router();
const storeController = require("../../controllers/products/store");

router.get("/", storeController.getStore);
router.post("/", storeController.createStore);
router.put("/add/:id", storeController.addProduct);
router.put("/remove/:id", storeController.removeProduct);
router.delete("/:id", storeController.deleteStore);

module.exports = router;
