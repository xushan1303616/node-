var fs = require('fs');
var Student = require('./student');

var express = require('express');
var router = express.Router();

router.get('/students', function (req, res) {
  // fs.readFile('./db.json','utf8',function (err,data) {
  //   if(err){
  //     return res.status(500).send('Server error.')
  //   }
  //   res.render('index.html', {
  //     fruits: [
  //       '苹果',
  //       '香蕉',
  //       '橘子'
  //     ],
  //     students:JSON.parse(data).students
  //   })
  // });

  Student.find(function (err,students) {
    if(err){
      return res.status(500).send('Server error.')
    }
    res.render('index.html', {
      fruits: [
        '苹果',
        '香蕉',
        '橘子'
      ],
      students:students
    })
  })
});

router.get('/students/new',function (req,res) {
  res.render('edit.html')
});

router.post('/students/new',function (req,res) {
  req.body = JSON.parse(JSON.stringify(req.body));
  Student.save(req.body,function (err) {
    if(err){
      return res.status(500).send('Server error.')
    }
    res.redirect('/students')
  })

});

router.get('/students/edit',function (req,res) {

  Student.findById(parseInt(req.query.id),function (err,student) {
    if(err){
      return res.status(500).send('Server error.')
    }
    res.render('add.html',{
      student:student
    })
  })

});

router.post('/students/edit',function (req,res) {
  req.body = JSON.parse(JSON.stringify(req.body));
  Student.updateById(req.body,function (err) {
    if(err){
      return res.status(500).send('Server error.');
    }
    res.redirect('/students');
  });
});

router.get('/students/delete',function (req,res) {
  var id = req.query.id;    //query获取url路径?后面的数据，并将获取的数据转化成对象
  Student.deleteById(id,function (err) {
    if(err){
      return res.status(500).send('Server error.');
    }
    res.redirect('/students')
  })

});


//导出router，让app.js可以导入
module.exports = router;
