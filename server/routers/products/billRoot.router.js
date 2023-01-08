const express = require("express");
const router = express.Router();

const routerBillRoot = require("../../controllers/products/billRoot");
const verifyToken = require("../../middlewares/verifyToken");

//admin
router.get("/", routerBillRoot.getAllBillRoot);
router.get("/billRoot/:id", routerBillRoot.getBillRoot);
router.get("/shipper", verifyToken, routerBillRoot.shipperGetBill);
router.put("/:id", verifyToken, routerBillRoot.updateBillRoot);
router.delete("/:id", verifyToken, routerBillRoot.deleteBillRoot);
router.post("/create", verifyToken, routerBillRoot.createBillRoot);

module.exports = router;
