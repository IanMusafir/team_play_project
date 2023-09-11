//здесь будет схема-модель для пользователей

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  avatarURL: String,
  nickName: String,
  login: String,
  password: String,
  posts: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Post",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
