
const {registerValidator} = require("../validation/validation")
const {Router} = require("express")
const {userController} = require("../controller/user.controller")

const router = Router()


router.post('/user', userController.createUser) //регистрация
router.post('/login',registerValidator, userController.login) //вход в акк

router.get('/user', userController.getUser) //получить юзеры
router.get('/user/:id', userController.getOneUser)//получить именно одного юзера
router.delete('/user', userController.deleteUser)//удалить юзера
router.patch('/user', userController.patchUser)//обновить данные юзера

module.exports = router