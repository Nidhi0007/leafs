const User =require('../models/user.model');
const Follower =require('../models/follower.model');
module.exports.followUser = async(req,res)=>{
    try {
        const followToUser = await User.findOne({username:req.body.followToUser});
        const followByUser = await User.findOne({username:req.body.followByUser});
        let data = {
            follow_to: followToUser.id,
            follow_by:followByUser.id
        }
        const followerData = await new Follower(data).save();
        return res.json({
            message: "Following",
            data: followerData
          });
    } catch (error) {
        return res.status(500).json(error.message);
    }
}