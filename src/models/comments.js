import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  text: { type: String, required: true },
  name: { type: String, required: true },
  post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
  date: { type: Date, required: true },
});

export default mongoose.model("Comment", CommentSchema);
