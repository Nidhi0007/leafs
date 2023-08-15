const User =require('../models/user.model');
const Post =require('../models/post.model');
const Follower =require('../models/follower.model');
module.exports.addPost = async(req,res)=>{
    try {
        const userData = await User.findOne({username:req.body.username});
        let data = {
            caption: req.body.caption,
            user:userData.id
        }
        const postData = await new Post(data).save();
        return res.json({
            message: "Post Successfully Created",
            data: postData
          });
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

module.exports.getPosts = async(req,res)=>{
    try {
        const userData = await User.findOne({username:req.query.username});
        const followerData = await Follower.find({follow_by: userData.id});
        const followerIds = followerData.map((item)=> item.follow_to);
        followerIds.push(userData.id)
        const postData = await Post.find({ user: { $in: followerIds } }).populate('user');
        return res.json({
            message: "Post Successfully Fetched",
            data: postData
          });
    } catch (error) {
        return res.status(500).json(error.message);
    }
}