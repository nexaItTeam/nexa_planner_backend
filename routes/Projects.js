const express = require("express");
const router = express.Router();
const controllers = require("../controllers/Projects");
const rateLimit = require('../middleware/Limiter')

router.post("/get", rateLimit.limiter,controllers.getProjects);
router.post("/add", controllers.addProjects);
// router.post("/update", controllers.updateEmployee);
// router.post("/delete", controllers.deleteEmployee);

module.exports = router;
