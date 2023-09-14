const Comment = require('../models/Comment.model')

module.exports.commentController = {
    getCommentsForPost: async (req, res) => {
        try {
          const postId = req.params.postId; 
          const comments = await Comment.find({ post: postId }).populate("user").exec();
          res.json(comments);
        } catch (err) {
          res.status(500).json(err);
        }
      },

  addComment: async (req, res) => {
    const { text } = req.body;
    const { postId } = req.params; 

    try {
      // Используйте req.user для получения информации о пользователе
      const comment = await Comment.create({
        user: req.user, // Привязываем комментарий к текущему пользователю
        post: postId, // Привязываем комментарий к новости
        text,
      });
      res.json(comment);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteComment: async (req, res) => {
    try {
      await Comment.findByIdAndRemove(req.params.id);
      res.json("Comment deleted");
    } catch (err) {
      res.status(500).json("Произошла ошибка при удалении комментария");
    }
  },

  editComment: async (req, res) => {
    const { text } = req.body;
    try {
      const data = await Comment.findByIdAndUpdate(
        req.params.id,
        { text }, // Обновите поле 'text'
        { new: true } // Верните обновленный документ
      );
      res.json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  getComment: async (req, res) => {
    try {
      const comments = await Comment.find({}).populate('user', 'nickName')
      res.json(comments)
    } catch (error) {
      res.json(error)
    }
  }
};
