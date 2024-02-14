const express = require("express");
const router = express.Router();
const estimate = require("./Estimate");

router.use("/estimate", estimate);

module.exports = router;
