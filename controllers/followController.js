const User =require('../models/user.model');
const Follower =require('../models/follower.model');
module.exports.followUser = async(req,res)=>{
    try {
        const followToUser = await User.findOne({username:req.body.followToUser});
        const followByUser = await User.findOne({username:req.body.followByUser});
        const followerData = await Follower.find({follow_by:followByUser.id,follow_to:followToUser.id});
        if(followerData.length){
            return res.json({
                message: "Already Following",
                data: {}
              });
        }
        let data = {
            follow_to: followToUser.id,
            follow_by:followByUser.id
        }
        const addFollower = await new Follower(data).save();
        return res.json({
            message: `${followByUser.username} started following ${followToUser.username}`,
            data: addFollower
          });
    } catch (error) {
        return res.status(500).json(error.message);
    }
}