//Это минимальный сервер, установленные зависимости читайте в package.json
const express = require('express');
const mongoose = require('mongoose');
const nodemone = require('nodemon')
const app = express()
const port = 4000
//какие-то изменения 
// еще какие-то изменения

app.use(express.json())


mongoose.connect('mongodb+srv://musafir:2124@cluster0.cl3ulb5.mongodb.net/Poetry')
.then(() => console.log('Сервер успешно подключен'))
.catch((error) => console.log('Произошла ошибка подключения к серверу'))

app.listen(port, () => {
    console.log('Подключение успешно');
})


