const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

router.get("/", (req, res) => {
  Comment.findAll();
});

router.get("/:id", (req, res) => {
  Comment.findOne();
});

router.post("/", (req, res) => {
  Comment.create();
});

router.put("/:id", (req, res) => {
  Comment.update();
});

router.delete("/:id", (req, res) => {
  Comment.destroy();
});

module.exports = router;
