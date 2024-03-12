const express = require("express");
const router = express.Router();
const estimate = require("./Estimate");
const employee = require("./Employee");

router.use("/estimate", estimate);
router.use("/employee", employee);

module.exports = router;
