const Post = require('../models/Post.model')


module.exports.postControllers = {
    createPost: async (req, res) => {
        try {
            const data = await Post.create({
                document: req.body.document,
                user: req.body.user,
                category: req.body.category
            })
            return res.json(data)
        } catch (error) {
            res.json(error)
        }
    },

    patchPost: async (req, res) => {
        try {
            const data = await Post.findByIdAndUpdate(req.params.id, req.body)
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
    deletePost: async (req, res) => {
        try {
            const data = await Post.findByIdAndRemove(req.params.id)
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
    getPost: async (req, res) => {
        try {
            const data = await Post.find({}).populate('User')

            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
    getOnePost: async (req, res) => {
        try {
            const data = await Post.findById(req.params.id)
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
    getTopPosts: async (req, res) => {
        try {
          const topPosts = await Post.find()
            .sort({ viewsCounter: -1 }) // Сортируем по убыванию viewsCounter
            .limit(3); // Получаем только топ 3
      
          res.json(topPosts);
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
      },
}