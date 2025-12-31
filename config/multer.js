const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "uploads/")
    },
    filename : (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const name = path.basename(file.originalname, ext)
        cb(null, `${name}-${new Date()}${ext}`)
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image/')){
        cb(null, true)
    }
    else{
        cb(new Error('Only images are allowed'))
    }
}


const upload = multer({
    storage,
    fileFilter,
    limits : {
        fileSize : 1024 * 1024 * 5
    }
})

module.exports = upload