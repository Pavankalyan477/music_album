const express = require("express");
const Album = require("../models/album.model");
const router = express.Router();

router.get("/album",async(req,res)=>{
    const album = await Album.find().populate("songs");
    return res.status(200).send({album});
})

router.post("/album",async(req,res)=>{
    const album = await Album.create(req.body);
    return res.status(201).send({album});
})
router.get("/album/:_id",async(req,res)=>{
    
    const album = await Album.findOne({_id:req.params._id});
    //console.log(album);
    return res.status(200).send({album});
})

router.get("/album/sortbyyear", async (req, res) => {
    const album = await Album.find().sort({year : 1}).lean().exec();
    return res.status(200).send({album})
})

router.get("/album/genre/:Genre", async (req, res) => {
    const album = await Album.findOne({Genre : req.params.Genre}).lean().exec();
    return res.status(200).send({album})
})
router.get("/album/artist/:Artist", async (req, res) => {
    const album = await Album.findOne({Artist : req.params.Artist}).lean().exec();
    return res.status(200).send({album})
})
module.exports = router;
