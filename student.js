var fs = require('fs');
dbPath = './db.json';

//添加保存学生
exports.find = function (callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err)
    }
    callback(null, JSON.parse(data).students)
  })
};

//编辑单个用户信息
exports.findById = function(id,callback){
  fs.readFile(dbPath,'utf8',function (err,data) {
    if(err){
      return callback(err)
    }
    var students = JSON.parse(data).students;
    console.log(parseInt(id));
    var ret = students.find(function (item) {
      return item.id === parseInt(id);
    });
    callback(null,ret);
  })
};

//添加保存学生
exports.save = function (student, callback) {
  fs.readFile(dbPath, 'utf8', function (err, data) {
    if (err) {
      return callback(err);
    }
    var students = JSON.parse(data).students;

    student.id = students[students.length - 1].id + 1;

    students.push(student);
    var fileDate = JSON.stringify({
      students: students
    });
    fs.writeFile(dbPath, fileDate, function (err) {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  })
};


//更新学生
exports.updateById = function (student,callback) {
  fs.readFile(dbPath,'utf8',function (err,data) {
    if(err){
      return callback(err)
    }
    var students = JSON.parse(data).students;

    student.id = parseInt(student.id);

    var stu = students.find(function (item) {
      return item.id === student.id;
    });

    for(var key in student){
      stu[key] = student[key];
    }

    var fileDate = JSON.stringify({
      students:students
    });

    fs.writeFile(dbPath,fileDate,function (err) {
      if(err){
        return callback(err);
      }
      callback(null);
    })


  })

};

//删除学生
exports.deleteById = function (id,callback) {
  fs.readFile(dbPath,'utf8',function (err,data) {
    if(err){
      return callback(err)
    }
    var students = JSON.parse(data).students;

    var deleteId = students.findIndex(function (item) {
      return item.id === parseInt(id)
    });

    students.splice(deleteId,1);

    fileData = JSON.stringify({
      students:students
    });

    fs.writeFile(dbPath,fileData,function (err) {
      if(err){
        return callback(err)
      }
    });
    callback(null);
  })
};