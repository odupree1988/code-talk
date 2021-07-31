const { Post, User } = require("../models");

const router = require("express").Router();

router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "title", "created_at"],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/comment/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "content", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      const post = dbPostData.get({ plain: true });

      // dbPostData.map((post) =>

      const { loggedIn } = req.session;

      res.render("comment", {
        post,
        loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
