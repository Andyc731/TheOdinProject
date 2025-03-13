import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema({
  display_name: { type: String, required: true },
  username: { type: String, required: true },
  passowrd: { type: String, required: true },
});

export default mongoose.model("User", UserSchema);
