import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, required: true },
});

export default mongoose.model("Post", PostSchema);
