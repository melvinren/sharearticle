var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/test');

var UserInfoSchema = new mongoose.Schema({
    username:{type: String},
    password:{type: String},
    nickname:{type: String}
})

var ArticleSchema = new mongoose.Schema({
    username:{type: String},
    title:{type: String},
    content:{type: String},
    time:{type:Date, default: Date.now()}
})

mongoose.model('articles', ArticleSchema);
mongoose.model('userInfo', UserInfoSchema);