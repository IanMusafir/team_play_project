const { Router } = require("express");
const pdfController = require("../controller/pdf.controller");
const pdfMiddleware = require("../models/middleware/pdf.middleware");

const router = Router()

router.post("/upload", pdfMiddleware.single('file'), pdfController.uploadPdf)

module.exports = router