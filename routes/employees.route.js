const empController = require("../controllers/employees.controller");

const express = require("express");
const router = express.Router();

// routes for employee
router.post("/fill-info", empController.fill_info);


module.exports = router;