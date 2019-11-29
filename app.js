var express = require('express');
var bodyParser = require('body-parser');    //导入body-parser模块,用于获取post数据
var router = require('./router');     //导入router路由模块

var app = express();   //express实例化

//node_modules和public包公共化
app.use('/node_modules/', express.static('./node_modules/'));
app.use('/public/', express.static('./public/'));

//配置express-art-template模板引擎，用户渲染页面
app.engine('html', require('express-art-template'));

//配置bodyParse，一定要在挂载路由app.use(router)之前配置
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//运行router路由模块
app.use(router);

app.listen(3000, function () {
  console.log('running......');
});
