const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const postSchema = new mongoose.Schema(
  {
    caption: { type: String, required: true },
    user: { type: ObjectId, ref: "User" }
  },
  {
    timestamps: true,
  }
);
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
