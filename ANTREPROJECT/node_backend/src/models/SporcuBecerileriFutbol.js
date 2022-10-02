const mongoose = require("mongoose");

const sporcuBecerileriFutbolSchema = new mongoose.Schema({
    sporcuId:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
    },
    footCokYonluTopSurme:{
        type: Number,
        required: true,
    },
    footTopKontrolu:{
        type: Number,
        required: true,
    },
    footPas:{
        type: Number,
        required: true,
    },
    footSutAtma:{
        type: Number,
        required: true,
    },
    footSurat:{
        type: Number,
        required: true,
    },
    createdDate:{
        type: Date,
        default: Date.now()
    },
});

const SporcuBeceriFutbol = mongoose.model("SporcuBecerileriFutbol", sporcuBecerileriFutbolSchema);

module.exports = SporcuBeceriFutbol;
