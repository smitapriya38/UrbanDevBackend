// module imports
const aptController = require("../controllers/appointment.controller");
const express = require("express");

// routes
const router = express.Router();
router.post("/apt-info", aptController.apt_controller_fill_info);

module.exports = router;