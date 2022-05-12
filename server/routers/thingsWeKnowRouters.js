const express = require("express");
const debug = require("debug")("thingsWeKnow: routers:thingsWeKnowRouters");

const router = express.Router();

const thingsWeKnow = [
  {
    id: 0,
    thing: "javaScript",
  },
  {
    id: 1,
    thing: "HTML",
  },
];

router.get("/", (req, res) => {
  debug("Things we know request");
  res.status(200).json(thingsWeKnow);
});

module.exports = router;
