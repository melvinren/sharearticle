var mongoose = require('mongoose');
var url= "mongodb://localhost/test";
mongoose.connect(url,function (error) {
    if(error){
        console.log(error);
    }else{
        console.log("数据库连接成功！");
    }
});

