import { Router } from "express";
import Comment from "../models/comments";
import Post from "../models/post";

const router = Router();

router.get("/", async (req, res) => {
  const allPosts = await Post.find().exec();
  res.send(allPosts);
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).exec();
    res.send("single post");
  } catch (err) {
    res.send(err);
  }
});

router.get("/:id/comments", async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.id }).exec();
    res.send("post comments");
  } catch (err) {
    res.send(err);
  }
});

router.post("/:id/comments", (req, res) => {
  res.send("post comment POST");
});

export default router;
