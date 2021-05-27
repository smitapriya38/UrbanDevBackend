// module imports
const transferController = require("../controllers/transfer.controller");
const express = require("express");

// routes
const router = express.Router();
router.post("/transfer-info", transferController.transfer_controller_fill_info);

module.exports = router;