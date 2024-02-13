const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
});

ItemSchema.virtual("url").get(function () {
  return "/catalog/items/${this.id}";
});

module.exports = mongoose.model("Item", ItemSchema);
