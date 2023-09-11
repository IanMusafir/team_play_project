//Это минимальный сервер, установленные зависимости читайте в package.json
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()
const port = 4000

app.use(express.json())
app.use(cors())
app.use(require('./router/post.route'))
app.use(require('./router/category.route'))


mongoose.connect('mongodb+srv://musafir:2124@cluster0.cl3ulb5.mongodb.net/Poetry')
.then(() => console.log('Сервер успешно подключен'))
.catch((error) => console.log('Произошла ошибка подключения к серверу'))

app.listen(port, () => {
    console.log('Подключение успешно');
})


