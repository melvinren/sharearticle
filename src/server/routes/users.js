var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Article = require('../models/Article');

router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// 获取文章
router.get('/loadArticles',function (req, res, next) {
    Article
        .find()
        .limit(3)
        .skip(req.query.currentPage*req.query.num)
        .exec(function (err, docs){
            if(err){
                console.log(err);
            }else{
                res.send({
                    articles:docs
                    })
            }
        })
});

// 发布文章
router.post('/releaseArticle',function (req, res,next) {
        var articleEnty = new Article({
            title: req.body.title,
            content: req.body.content,
            label:req.body.label,
            src:req.body.src
        });
         articleEnty.save(function (err,docs) {
        if(err){
            console.log(err);
        }else{
            res.send({status:1});
        }
    });
});

router.post('/share',function (req,res,next) {
    var articleEnty = new Article({
        title: req.body.title,
        src: req.body.src,
        label:req.body.label
    })
    articleEnty.save(function (err,docs) {
        if(err){
            console.log(err);
        }else{
            res.send({status:1})
        }
    });
})

module.exports = router;
