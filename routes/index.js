var express = require("express");
var router = express.Router();
const bookRouter = require("./book.api");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).send("Welcome to CoderSchool");
});

router.use("/books", bookRouter);

module.exports = router;
