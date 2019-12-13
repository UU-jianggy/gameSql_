var mysql = require("mysql")
var express = require("express")
let app = express()

var connection = mysql.createConnection ({
    host: "localhost",
    user: "jgy123",
    password: "jgy123",
    database: "game_new_list"
})

// 跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")
    next()
})

connection.connect()

// 查询
var sql = "SELECT * FROM new_list"

app.get('/get',function (req,res) {
    connection.query(sql,function(err,result) {
        if (err) {
            console.log(err,'这是err')
            return
        }
        res.status(200)
        res.json(result)
        console.log(result,'这是result')
    })
})

// 添加数据
// var addSqlParams = 
app.post('/post', function (req,res) {
    req.on('data',function(data) {
        obj = JSON.parse(data)
        console.log(obj)
        res.send("数据接收了")
        var addSql = 'INSERT INTO new_list(code,type,title,text,time) VALUES(?,?,?,?,?)'
        var addList = obj
        connection.query(addSql,addList,function(err,result) {
            if (err) {
                console.log(err)
            }
        })
    })
})

// 开通端口
var server =  app.listen(5000, function() {
    var host = server.address().address
    var port = server.address().port
    console.log(host,'这是host')
    console.log(port,'这是port')
})