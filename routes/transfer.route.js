// module imports
const transferController = require("../controllers/transfer.controller");
const express = require("express");

// routes
const router = express.Router();
router.post("/transfer-info", transferController.transfer_controller_fill_info);
router.get("/get-transfer-info", transferController.transfer_controller_get_info);

module.exports = router;