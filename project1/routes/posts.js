const express = require("express");
const Post = require("../models/post");
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("posts/new", { post: new Post() });
});

router.get("/:slug", async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug });
    if (!post) res.redirect("/");
    else res.render("posts/post", { post: post });
  } catch (error) {
    console.error(error);
  }
});

router.get("/edit/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render("posts/edit", { post });
});

router.post(
  "/",
  async (req, res, next) => {
    req.newPost = new Post();
    next();
  },
  savePostAndRedirect("new")
);

router.delete("/:id", async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

router.put(
  "/edit/:id",
  async (req, res, next) => {
    req.newPost = await Post.findById(req.params.id);
    next();
  },
  savePostAndRedirect("edit")
);

function savePostAndRedirect(path) {
  return async (req, res) => {
    let newPost = req.newPost;
    newPost.title = req.body.title;
    newPost.description = req.body.description;
    newPost.markdown = req.body.markdown;

    try {
      newPost = await newPost.save();
      res.redirect(`/posts/${newPost.slug}`);
    } catch (error) {
      console.error(error);
      res.render(`posts/${path}`, { post: newPost });
    }
  };
}

module.exports = router;
