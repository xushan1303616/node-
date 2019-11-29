# node-

1、app.js是入口文件，终端运行node app.js或者nodemon app.js就可以启动这个服务器，路由被放在router.js文件中了

2、router.js路由模块，将路由从app.js中分离开

3、student.js是处理文件的，因为readFile和writeFile是异步函数，采用回调函数方式，将数据传给router.js文件

4、db.json存储数据

5、views包用来存储html文件，views是默认路径

6、public存储静态文件

7、node_nodules是npm生成的包，包含多个文件
