// module import
const salaryController = require("../controllers/salary.controller");
const express = require("express");

// routes
const router = express.Router();
router.post("/salary-info", salaryController.salary_controller_fill_info);
router.get("/get-salary-info", salaryController.salary_controller_get_info);

module.exports = router;
