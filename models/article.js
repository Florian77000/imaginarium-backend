const mongoose = require ('mongoose');

const articleSchema = mongoose.Schema({
    famille : String,
    matiere : String,
    prix : Number,
});

const Article = mongoose.model('articles', articleSchema);

module.exports = Article;