const mongoose = require("mongoose");

const sporcuBilgileriSchema = new mongoose.Schema({
    antrenorId:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
    },
    sporcuId:{
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

const SporcuBilgi = mongoose.model("SporcuBilgileri", sporcuBilgileriSchema);

module.exports = SporcuBilgi;
