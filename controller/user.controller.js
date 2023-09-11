//сюда пишем контроллер для пользователей const User = require('../models/User.model')
const User = require('../models/User.model')


module.exports.userController = {
  createUser: async (req, res) => {
    try {
      const data = await User.create({
        avatarURL:req.body.avatarURL,
        nickName: req.body.nickName,
        login: req.body.login,
        password: req.body.password,
      });
      return res.json(data);
    } catch (error) {
      res.json({message:error.toString()});
    }
  },

  patchUser: async (req, res) => {
    try {
      const data = await User.findByIdAndUpdate(req.params.id, req.body);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const data = await User.findByIdAndRemove(req.params.id);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  getUser: async (req, res) => {
    try {
      const data = await User.find();

      res.json(data,"dfdsf");
    } catch (error) {
      res.json(error);
    }
  },
  getOneUser: async (req, res) => {
    try {
      const data = await User.findById(req.params.id);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
};
