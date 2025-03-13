import { Router } from "express";
import Comment from "../models/comments";
import Post from "../models/post";

const router = Router();

router.get("/", async (req, res) => {
  const allPosts = await Post.find().exec();
  res.send(allPosts);
});

router.post("/", async (req, res) => {
  try {
    const post = new Post({
      user: req.body.user,
      text: req.body.text,
      date: new Date(),
    });
    await post.save();
    res.json({ message: "Post created successfully", post: post });
  } catch (err) {
    res.send(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).exec();
    res.json(post);
  } catch (err) {
    res.status(400).json({ error: "Invalid request parameters" });
  }
});

router.get("/:id/comments", async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.id }).exec();
    res.json(comments);
  } catch (err) {
    res.status(400).json({ error: "Invalid request parameters" });
  }
});

router.post("/:id/comments", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id).exec();
    const comment = new Comment({
      text: req.body.text,
      name: req.body.name,
      post: post,
      date: new Date(),
    });

    res.json({ message: "Comment created successfully", comment: comment });
  } catch (err) {
    res.status(400).json({ error: "Invalid request parameters" });
  }
});

export default router;
