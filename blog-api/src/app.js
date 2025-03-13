import "dotenv/config";
import cors from "cors";
import express from "express";
import "dotenv";
import mongoose from "mongoose";
import routes from "./routes";

const mongoDB = process.env.MONGODB_URI;

mongoose.connect(mongoDB);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/user", routes.user);
app.use("/posts", routes.posts);

app.listen(3000, () => console.log("Listening on port 3000!"));
