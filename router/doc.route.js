const { Router } = require("express");
const pdfController = require("../controller/pdf.controller");
const pdfMiddleware = require("../models/middleware/pdf.middleware");
const imgMiddleware = require("../models/middleware/img.middleware");

const router = Router()

router.post("/upload", pdfMiddleware.single('file'), pdfController.uploadPdf)
router.post("/upload/img", imgMiddleware.single('image'), pdfController.uploadPdf)

module.exports = router