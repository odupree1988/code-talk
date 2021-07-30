const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage", {
    id: 1,
    content: "lorem ipsum de le sral lraf fneas",
    title: "Handlebars Docs",
    created_at: new Date(),
    user: {
      username: "test_user",
    },
  });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
