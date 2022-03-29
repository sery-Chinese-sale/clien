const mongoose=require('mongoose');
const { User } = require('./user');
const winningstSchema=new mongoose.Schema({

   id:{type:mongoose.Types.ObjectId,ref:"User"},
    user_id:String,
    item_id:String,
    winning_date:Date
})

const Winnings= mongoose.model("winnings",winningsSchema);
module.exports={
    winningsSchema,
    Winnings
}