
const mongoose = require("mongoose");
const AlbumSchema = new mongoose.Schema({
    Artist:{type:String,required:true},
    songs:[{
        name:{type:String},
        duration:{type:String},
    }],
    Genre:{type:String},
    year:{type:Number},
    cover_image:{type:String},
    logo_image:{type:String}
})
const Album = mongoose.model("album",AlbumSchema);
module.exports = Album;
