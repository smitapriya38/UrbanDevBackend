// module imports
const cityController = require("../controllers/cities.controller");
const express = require("express");

// including controller route
const router = express.Router();
router.get("/get-city", cityController.city_controller_get_info);

// module exports
module.exports = router;