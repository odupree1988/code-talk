const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Post, User, Comment } = require("../models");

router.get("/", withAuth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "title", "created_at"],
  });
  res.render("dashboard", { loggedIn: true });
});

module.exports = router;
