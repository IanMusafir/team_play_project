const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nickName: String,
  login: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
//здесь будет схема-модель для пользователей
