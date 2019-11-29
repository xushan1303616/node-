# node-

1、app.js是入口文件，终端运行node app.js或者nodemon app.js就可以启动这个服务器，路由被放在router.js文件中了

2、router.js路由模块，将路由从app.js中分离开

3、student.js是处理文件的，因为readFile和writeFile是异步函数，采用回调函数方式，将数据传给router.js文件

4、db.json存储数据

5、views包用来存储html文件，views是默认路径

6、public存储静态文件

7、node_nodules是npm生成的包，包含多个文件




关于node_nodules

终端自动生成的一个包，包含非常多文件，主要用于配置环境

npm init -y   //自动生成package.json文件，包含这个环境由什么组成

npm install --save bootstrap@3.3.7   //下载bootstrap3.3.7版本

npm install --save body-parse

npm install --save express

npm install --save express-art-template  //这个包依赖express，必须有express

下载包一定要加--save 这样才会在package.json中生成下载包信息，否则后期不知道下载了哪些包

以上下载包信息，都可以在package.json中查看
