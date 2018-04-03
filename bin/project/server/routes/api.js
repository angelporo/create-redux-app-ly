const express = require("express");
const router = express.Router();
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

router.post("/", function(req, res, next) {
  console.log("api");
  res.json({});
});

module.exports = router;
