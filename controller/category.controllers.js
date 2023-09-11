const Category = require('../models/Category.model')


module.exports.categoryControllers = {
    createCategory: async (req, res) => {
        try {
            const data = await Category.create({
                title: req.body.title,
                post: req.body.post
            })
            return res.json(data)
        } catch (error) {
            res.json(error)
        }
    },

    patchCategory: async (req, res) => {
        try {
            const data = await Category.findByIdAndUpdate(req.params.id, req.body)
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
    deleteCategory: async (req, res) => {
        try {
            const data = await Category.findByIdAndRemove(req.params.id)
            res.json(data)
        } catch (error) {
            res.json(error)
        }
    },
    getCategories: async (req, res) => {
        try {
            const data = await Category.find({})

            res.json(data)
        } catch (error) {
            res.json(error)
        }
    }
}