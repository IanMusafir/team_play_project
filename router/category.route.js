const {Router} = require("express")
const {categoryControllers} = require("../controller/category.controllers")

const router = Router()


router.post('/Category', categoryControllers.createCategory)
router.get('/Category', categoryControllers.getCategories)
router.delete('/Category', categoryControllers.deleteCategory)
router.patch('/Category', categoryControllers.patchCategory)

module.exports = router