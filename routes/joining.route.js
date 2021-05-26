// module imports
const joiningController = require("../controllers/joining.controller");
const express = require("express");
const router = express.Router();

// including controller route
router.post("/joining-fill-info", joiningController.joining_controller_fill_info);

// module exports
module.exports = router;