var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    title:{type:String},
    content:{type:String},
    label:{type:String},
    src:{type:String},
    date:{type:Date,default:(new Date).toLocaleString()}
})