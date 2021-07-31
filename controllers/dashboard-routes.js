const router = require("express").Router();
const { Post, User, Comment } = require("../models");

router.get("/", (req, res) => {
  console.log(req.session);
  const { loggedIn } = req.session;
  res.render("dashboard", { loggedIn });
});

module.exports = router;
