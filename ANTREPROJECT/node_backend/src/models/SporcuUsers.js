const mongoose = require("mongoose");

const sporcuUsersSchema = new mongoose.Schema({
    antrenorId:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
    },
    sporcuAd:{
        type:String,
        required: true,
    },
    sporcuSoyAd:{
        type:String,
        required: true,
    },
    sporcuDogumTarihi:{
        type:String,
        required: true,
    },
    createdDate:{
        type: Date,
        default: Date.now()
    },
});

const sporcuUser = mongoose.model("SporcuUsers", sporcuUsersSchema);

module.exports = sporcuUser;
