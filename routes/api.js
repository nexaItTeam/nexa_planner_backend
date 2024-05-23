const express = require("express");
const router = express.Router();
const estimate = require("./Estimate");
const employee = require("./Employee");
const project = require("./Projects");

router.use("/estimate", estimate);
router.use("/employee", employee);
router.use("/project", project);


module.exports = router;
