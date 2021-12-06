const mongoose = require("mongoose");
const { Schema } = mongoose;

const ArticleSchema = new Schema({
    title: String,
    image: String,
    para: String,
})

module.exports = mongoose.model('Message', ArticleSchema)