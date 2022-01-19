const express = require("express");
const Album = require("../models/album.model");
const router = express.Router();

// router.get("/album",async(req,res)=>{
//     const album = await Album.find().populate("songs");
//     return res.status(200).send({album});
// })

router.post("/album",async(req,res)=>{
    const album = await Album.create(req.body);
    return res.status(201).send({album});
})
router.get("/album/:_id",async(req,res)=>{
    
    const album = await Album.findOne({_id:req.params._id});
    //console.log(album);
    return res.status(200).send({album});
})
router.get("/album",async(req,res)=>{
    const page=+req.query.page || 1;
    const size =+req.query.size || 3;
    const offset=(page-1)*size;
     const album = await Album.find().populate("songs").skip(offset).limit(size).lean().exec();
     const totalCount = await Album.find().countDocuments();
     const totalPage = Math.ceil(totalCount/size)
     return res.status(200).send({album,totalPage});
  })
  

router.get("/album/:_id/sort", async (req, res) => {
    //  const album = await Album.find({}).populate("songs").sort({"year":1}).lean().exec();
    const page=+req.query.page || 1;
    const size =+req.query.size || 3;
    const offset=(page-1)*size;
     const album = await Album.find({}).populate("songs").skip(offset).limit(size).sort({"year":1}).lean().exec();
     const totalCount = await Album.find().countDocuments();
     const totalPage = Math.ceil(totalCount/size)
     return res.status(200).send({album,totalPage});
   
    //  return res.status(200).send({album});
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
