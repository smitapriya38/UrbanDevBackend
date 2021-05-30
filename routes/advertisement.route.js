// module import
const adController = require("../controllers/advertisement.controller");
const express = require("express");

//routes
const router = express.Router();
router.post("/ad-info", adController.ad_controller_fill_info);
router.get("/get-ad-letter-no", adController.ad_controller_get_ad_letter_no);
router.get("/get-ad-info", adController.ad_controller_get_info);

module.exports = router;