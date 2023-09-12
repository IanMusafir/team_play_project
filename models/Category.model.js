const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({
    title: String,

    post: {
        type: mongoose.SchemaTypes.ObjectId,
           ref: "Post"
    },



})
const Category = mongoose.model("Category", categorySchema)
module.exports = Category