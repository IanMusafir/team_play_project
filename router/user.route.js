

const {Router} = require("express")
const {userController} = require("../controller/user.controller")

const router = Router()


router.post('/user', userController.createUser)
router.get('/user', userController.getUser)
router.get('/user/:id', userController.getOneUser)
router.delete('/user', userController.deleteUser)
router.patch('/user', userController.patchUser)

module.exports = router