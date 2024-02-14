const express = require("express");
const router = express.Router();
const controllers = require("../controllers/Estimate");

// to create components
router.post("/create-component", controllers.createComponents);

// get components
router.post("/get-component", controllers.getComponents);

module.exports = router;
