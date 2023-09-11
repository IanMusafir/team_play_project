<<<<<<< HEAD

//тут роуты для постов

=======
>>>>>>> a9aeac8d486883b1234b1c7e61c46cde3b887b67
const {Router} = require("express")
const {postControllers} = require("../controller/post.controller")

const router = Router()


router.post('/Posts', postControllers.createPost)
router.get('/Posts', postControllers.getPost)
router.get('/Posts/:id', postControllers.getOnePost)
router.delete('/Posts', postControllers.deletePost)
<<<<<<< HEAD
router.patch('/Posts/:id', postControllers.patchPost)

module.exports = router

=======
router.patch('/Posts', postControllers.patchPost)

module.exports = router
>>>>>>> a9aeac8d486883b1234b1c7e61c46cde3b887b67
