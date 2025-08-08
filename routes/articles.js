var express = require('express');
var router = express.Router();

require("../models/connection");
const Article = require ('../models/article')

router.post('/add', (req,res) => {
    Article.findOne().then((data) => {
        const newArticle = new Article ({
            famille : req.body.famille,
            matiere : req.body.matiere,
            prix : req.body.prix,
        });
        newArticle.save().then((data) => {
            res.json({result : true, message:'ajout validé'})
        })
    })
})

module.exports = router;