// module imports
const joiningController = require("../controllers/joining.controller");
const express = require("express");

// including controller route
const router = express.Router();
router.post("/joining-info", joiningController.joining_controller_fill_info);
router.get("/get-joining-info", joiningController.joining_controller_get_info);
router.get("/get-employee-id", joiningController.joining_controller_get_emp_info);
router.delete("/delete-joining-info", joiningController.joining_controller_delete_info);

// module exports
module.exports = router;