// module import
const adController = require("../controllers/advertisement.controller");
const express = require("express");

//routes
const router = express.Router();
router.post("/ad-info", adController.ad_controller_fill_info);

module.exports = router;