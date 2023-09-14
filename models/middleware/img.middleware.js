const multer = require('multer')
const moment = require('moment')

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads')
    },
    filename(req, file, cb) {
        cb(null,file.originalname)
    }
})

const upload = multer({storage})

const types = ['image/png', "application/svg", 'image/jpeg', 'image/jpg']

const fileFilter = (req, file, cb) => {
    if (types.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}


module.exports = multer({storage, fileFilter})