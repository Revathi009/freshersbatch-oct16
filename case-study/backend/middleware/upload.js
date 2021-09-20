var express = require('express');
const router = express.Router();
var multer = require('multer');
var path = require('path');
const {GridFsStorage} = require('multer-gridfs-storage');

const storage = new GridFsStorage({
    url:process.env.MONGODB_URL,
    options:{useNewUrlParser: true, useUnifiedTopology: true},
    file: (req,file)=>{
        const match = ["image/jpg", "image/jpeg"];

        if(match.indexOf(file.mimetype) === -1){
            const filename = `${Date.now()}-any-name-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: "photos",
            filename: `${Date.now()}-any-name-${file.originalname}`
        }
    }
})

module.exports = multer({storage});
