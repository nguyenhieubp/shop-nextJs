const express = require("express");
const router = express.Router();

const verifyToken = require("../../middlewares/verifyToken");
const controllerAuthShipper = require("../../controllers/auth/shipper");
const checkShipperCurrent = require("../../middlewares/checkShipperCurrent");

router.post("/register", controllerAuthShipper.register);
router.post("/login", controllerAuthShipper.login);

//admin use
router.get("/", verifyToken, controllerAuthShipper.getAllShipper);
//admin and shipperId use
router.get("/item/:id", verifyToken, controllerAuthShipper.getShipper);
router.put("/:id", verifyToken, controllerAuthShipper.updateShipper);
router.delete("/:id", verifyToken, controllerAuthShipper.deleteShipper);

router.get(
  "/checkCurrentShipper",
  checkShipperCurrent,
  controllerAuthShipper.checkShipperCurrent
);

module.exports = router;
