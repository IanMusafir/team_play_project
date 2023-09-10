//Это минимальный сервер, установленные зависимости читайте в package.json
const express = require('express');
const mongoose = require('mongoose');
const nodemone = require('nodemon')
const app = express()
const port = 4000

app.use(express.json())

//this is only for test 
mongoose.connect('mongodb+srv://musafir:2124@cluster0.cl3ulb5.mongodb.net/Poetry')
.then(() => console.log('Сервер успешно подключен'))
.catch((error) => console.log('Произошла ошибка подключения к серверу'))

app.listen(port, () => {
    console.log('Подключение успешно');
})
//imagine that here is new code and im about to add to my master branch

