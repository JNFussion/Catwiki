var express = require("express");
var router = express.Router();

var breedController = require("../controllers/breedController");

router.get("breeds/names", breedController.names);
router.get("breeds/top", breedController.top);
router.get("breed/:id", breedController.show);

module.exports = router;
