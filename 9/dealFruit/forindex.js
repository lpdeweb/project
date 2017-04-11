
const express=require('express');
const static=require('express-static');
const mysql=require('mysql');
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'fruit'
});
let server=express();
server.listen(4000);
server.get('/adduser',(req,res)=>{
    connection.query(`INSERT INTO FROM USER VALUES(${1})`,(err,data)=>{//注册

    })
});
server.get('/getcity',(req,res)=>{
   connection.query('select f_city,f_city_code from f_place' ,(err,data)=>{
        if(err){
            res.send({err:1,msg:'数据连接失败'})
            res.end();
        }else{
            if(data.length>=0){
                res.send(data);
                res.end();
            }
        }
   })
});
server.get('/login',(req,res)=>{
    console.log(req.query);
    connection.query(`SELECT * FROM user WHERE username='${req.query.username}'`,(err,data)=>{
        if(err){
            res.send({err:1,msg:`数据连接失败`});
            res.end()
        }else if(data.length>0){
            res.send({err:1,msg:`用户存在`});
            res.end();
        }else{
            connection.query(`INSERT INTO user VALUES(0,'${req.query.username}','${req.query.password}')`,(err,data)=>{
                if(err){
                    res.send({err:1,msg:'添加失败'});
                    res.end();
                }else{
                    res.send({err:0,msg:'注册成功'});
                    res.end();
                }
            });
        }
    });
});
server.get('/signin',(req,res)=>{
    connection.query(`SELECT * FROM user WHERE username='${req.query.username}'`,(err,data)=>{
        if(err){
            res.send({err:1,msg:'数据连接失败'});
            res.end();
        }else{
            if(data.length==0){
                res.send({err:1,msg:'用户不存在'});
                res.end();
            }else{
                if(data[0].password==req.query.password){
                    res.send({err:0});
                    res.end();
                }else{
                    res.send({err:1,mag:'用户名或密码错误'});
                    res.end();
                }
            }
        }
    })
});
server.use(static('fruit'));
