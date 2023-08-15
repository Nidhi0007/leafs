const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const followerSchema = new mongoose.Schema(
  {
    follow_to: { type: ObjectId, ref: "User" },
    follow_by: { type: ObjectId, ref: "User" }
  },
  {
    timestamps: true,
  }
);
const Follower = mongoose.model("Follow", followerSchema);
module.exports = Follower;
