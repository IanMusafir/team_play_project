const {Router} = require("express")
const {postControllers} = require("../controller/post.controller")

const router = Router()


router.post('/post', postControllers.createPost)
router.get('/post', postControllers.getPost)
router.get('/post/:id', postControllers.getPostById)
router.delete('/post', postControllers.deletePost)
router.patch('/post', postControllers.patchPost)

module.exports = router