// module import
const trainingController = require("../controllers/training.controller");
const express = require("express");

// routes
const router = express.Router();
router.post("/training-info", trainingController.training_controller_fill_info);

// module export
module.exports = router;