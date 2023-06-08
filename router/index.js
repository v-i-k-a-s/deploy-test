const express = require("express");
const router = express.Router();
const homeController = require("../controller/home");

router.get("/", homeController.get);

router.use("/project", require("./project"));
router.use("/bug", require("./bug"));

module.exports = router;
