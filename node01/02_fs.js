/*
    fs模块(File System 文件系统)
        - fs模块是node中的核心模块， 使用fs
        无需下载直接引入即可
        - node是通过fs模块来对磁盘中的文件进行操作的
        - 通过fs模块可以对系统中对文件进行各种操作
        - fs模块中大部分方法都提供了两个版本：
            不带sync
                - 异步方法
            带sync
                - 同步方法
        - 写入文件
           1.同步写入
           2. 异步写入。
           3.简单写入
           4. 流式写入
         -  读取文件
 */
var fs = require("fs");
/*
    同步写入：
       1.打开文件
       fs.open(path, flags[, mode], callback)
       fs.open('hi.js');
           -参数：path
              - 要打开的文件的路径
              flags
                 - 对文件的操作的类型
                  - 需要一个字符串 "w"  "r"

              mode
                 - 用来设置文件的权限，在windows下意义不大，一般都不传
                 - 默认值  666
              -返回值
                  fd  该方法会返回一个文件的描述符作为结果
       2.向文件中写入内容
       fs.writeSync(fd, string[, position[, encoding]])

       3.关闭文件
       fs.closeSync(fd)
            - 该方法用于关闭文件
            - 参数：
                fd
                 要关闭的文件描述符
 */
//打开文件
var fd = fs.openSync("hi2.js","w");
//向文件中写入内容
fs.writeSync(fd,"--",10,"utf-8");
//关闭文件
fs.closeSync(fd);
console.log(fd)