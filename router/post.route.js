
//тут роуты для постов


const {Router} = require("express")
const {postControllers} = require("../controller/post.controller")

const router = Router()


router.post('/posts', postControllers.createPost)
router.get('/posts', postControllers.getPost)
router.get('/posts/:id', postControllers.getOnePost)
router.delete('/posts', postControllers.deletePost)
router.patch('/posts/:id', postControllers.patchPost)

module.exports = router




