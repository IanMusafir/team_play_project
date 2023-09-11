const Post = require('../models/Post.model')


module.exports.postControllers = {
    createPost: async (req,res)=>{
        try {
            const data = await Post.create({
               document: req.body.document,
               user: req.body.user,
               category: req.body.category
            })
          return  res.json(data)
        } catch (error) {
            res.json(error)
        }
    },

    patchPost: async (req,res)=>{
        try {
            const data = await Post.findByIdAndUpdate(req.params.id, req.body)
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
    deletePost: async(req,res)=>{
        try {
            const data = await Post.findByIdAndRemove(req.params.id)
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
    getPost: async(req,res)=>{
try {
    const data = await Post.find({}).populate('User')

    res.json(data)
} catch (error) {
    res.json(error)
}
    }
}