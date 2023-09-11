const {Router} = require("express")
const {categoryControllers} = require("../controller/category.controllers")

const router = Router()


router.post('/Posts', categoryControllers.createCategory)
router.get('/Posts', categoryControllers.getCategories)
router.delete('/Posts', categoryControllers.deleteCategory)
router.patch('/Posts', categoryControllers.patchCategory)

module.exports = router