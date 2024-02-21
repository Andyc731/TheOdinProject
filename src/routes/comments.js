import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send("comments route");
});

export default router;
