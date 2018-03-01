var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
require('../config/mongoose');
var router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// 用户名查询接口
router.get('/userNameCheck', function (req, res, next) {
    var userInfoModel = mongoose.model('userInfo');
    userInfoModel.find({"username": req.query.username}, function (err, docs) {
        if(err){
            console.log("error:"+err);
        }else {
            if(docs[0] === undefined){
               res.send({isExist: false});
            }else{
               res.send({isExist: true});
            }
        }
    })
});

// 文章获取
router.get('/getArticles', function (req, res, next) {
    var articleModel = mongoose.model('articles');
    articleModel.find({},function (err, docs) {
        if(err){
            console.log(err)
        }else　{
            res.send(docs);
        }
    })
});

/* POST users listing. */
// 用户注册接口
router.post('/regist', function (req, res, next) {
    var userInfoModel = mongoose.model('userInfo');
    //构建操作实体
    var Entiy = new userInfoModel({
        username: req.body.username,
        password: req.body.password,
        nickname: req.body.nickname
    });
    Entiy.save(function (err, doc) {
        if(err){
            console.log(err);
        }else{
            console.log(doc);
        }
    });
    res.send({status: 1});
})

// 用户登录校验
router.post('/login', function(req, res, next) {
    var userInfoModel = mongoose.model('userInfo');
    // 用户是否存在，如存在则比较密码
    userInfoModel.find({"username": req.body.username},function (err, docs) {
        if(err){
            console.log("error:"+err);
        }else {
            // 此处查询不到结果，将返回一个空数组,空数组默认为undefined
            if(docs[0]=== undefined){
                res.send({status: -1});
            }else{
                // 检测密码是否正确
                if(req.body.password === docs[0].password){
                    res.send({status: 1})
                }else {
                    res.send({status: 0})
                }
            }
        }
    })
});
// 文章发布
router.post('/releaseArticle', function (req, res, next) {
    var articleModel = mongoose.model('articles');
    console.log(req.body.username);
    var articleEntiy = new articleModel({
        username: req.body.username,
        title: req.body.title,
        content: req.body.content,
        time: req.body.time
    });
    articleEntiy.save(function (err, doc) {
        if(err){
            console.log(err);
        }else{
            console.log(doc);
        }
    });
    res.send({status: 1});
})

module.exports = router;
