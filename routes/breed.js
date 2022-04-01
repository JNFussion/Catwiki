var express = require("express");
var router = express.Router();

var breedController = require("../controllers/breedController");

router.get("/breeds/names", breedController.names);
router.get("/breeds/top", breedController.top);
router.post("/breeds/top", breedController.top_post);
router.get("/breed/:id", breedController.show);
router.get("/breed/:id/images", breedController.extra_photos);

module.exports = router;
