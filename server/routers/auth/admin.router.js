const express = require("express");
const router = express.Router();

const controllerAuthAdmin = require("../../controllers/auth/admin");

router.post("/register", controllerAuthAdmin.register);
router.post("/login", controllerAuthAdmin.login);

module.exports = router;
