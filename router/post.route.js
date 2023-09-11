
//тут роуты для постов

const {Router} = require("express")
const {postControllers} = require("../controller/post.controller")

const router = Router()


router.post('/Posts', postControllers.createPost)
router.get('/Posts', postControllers.getPost)
router.get('/Posts/:id', postControllers.getOnePost)
router.delete('/Posts', postControllers.deletePost)
router.patch('/Posts/:id', postControllers.patchPost)

module.exports = router

