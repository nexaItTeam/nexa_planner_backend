const express = require("express");
const router = express.Router();
const controllers = require("../controllers/Employee");

router.post("/get", controllers.getEmployee);
router.post("/add", controllers.addEmployee);
router.post("/update", controllers.updateEmployee);
router.post("/delete", controllers.deleteEmployee);

module.exports = router;
