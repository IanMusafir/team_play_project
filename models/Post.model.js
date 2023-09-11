const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    document: String,
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category"
    }


})
const Post = mongoose.model("Post", postSchema)
module.exports = Post