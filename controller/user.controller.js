//сюда пишем контроллер для пользователей const User = require('../models/User.model')
require("dotenv").config();

const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.userController = {
  createUser: async (req, res) => {
    try {
        const { login, password, avatarURL, nickName } = req.body;

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );

      const data = await User.create({
        avatarURL: avatarURL,
        nickName: nickName,
        login: login,
        password: hash.toString(),
      });

      return res.json(data);
    } catch (error) {
      res.json({ message: error.toString() });
    }
  },

  login: async (req, res) => {
    const { login, password } = req.body;
    const candidate = await User.findOne({ login });
    if (!candidate) {
      return res.json("неверный логин");
    }
    const valid = await bcrypt.compare(password, candidate.password);
    if (!valid) {
      return res.status(401).json("неверный пароль");
    }
    const payload = {
      id: candidate._id,
      login: candidate.login,
    };

    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: "30d",
    });
    res.json(token);
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

      res.json(data, "dfdsf");
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
