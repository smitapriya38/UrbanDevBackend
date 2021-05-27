// module imports
const joiningController = require("../controllers/joining.controller");
const express = require("express");

// including controller route
const router = express.Router();
router.post("/joining-info", joiningController.joining_controller_fill_info);

// module exports
module.exports = router;