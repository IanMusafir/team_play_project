const {Router} = require("express")
const {postControllers} = require("../controller/post.controller")

const router = Router()


router.post('/Posts', postControllers.createPost)
router.get('/Posts', postControllers.getPost)
router.delete('/Posts', postControllers.deletePost)
router.patch('/Posts', postControllers.patchPost)

module.exports = router