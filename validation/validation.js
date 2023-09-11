const {body} = require("express-validator")


module.exports.registerValidator = [
    body('login', "логин должен сожержать минимум 2 символа").isLength({min: 2}),
    body('password', "пароль должен содержат минимум 4 символа").isLength({min: 4})

]