var express = require('express');
const router = express.Router();
var multer = require('multer');
var path = require('path');
const GridFsStorage = require('multer-gridfs-storage');

const upload = require('../middleware/upload');

router.post("/upload", upload.single("file"), (req,res)=> {
    if(req.file == undefined) {
        return res.send("you must select a file");
    }
    else
    {
        const imgUrl = `http://localhost:3000/api/upload/$(req.file.filename)`;
        return res.send(imgUrl);
    }
})

router.get('upload/:filename', async(req,res)=> {
    try{
        const file = await gfs.files.findOne({filename:req.params.filename});
        const readStream = gfs.createReadStream(file.filename);
        readStream.pipe(res)
    }catch(error){
        res.send('not found');

    }
})

router.delete("upload/:filename", async(req,res)=>{
    try{
        await gfs.files.deleteOne({filename: req.params.filename});
        res.send("success");
    }catch(error){
        res.send("An error occured")
    }
})


module.exports = router;
