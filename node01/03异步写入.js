var fs = require("fs");

/*

    异步写入
        1.打开文件
        fs.open(path, flags[, mode], callback)
        callback  回调函数，该函数将会在文件打开以后调用
            - 异步方法一般都是通过回调函数来返回结果
            -回调函数有两个参数
               err
                  - 错误对象， 如果出现错误将会以第一个参数的形式返回，
                     如果没有错误，返回null
               fd
                   - 文件的描述符

        2.写入文件
        fs.write(fd, buffer[, offset[, length[, position]]], callback)
        3.关闭文件
        fs.close(fd, callback)
 */
fs.open("hello.txt","w",function (err, fd) {
    //判断是否出错
    if(!err){
        fs.write(fd,"这是通过异步写入的内容",function(err){
            if(!err){
                console.log("写入成功～～～");
            }
            //关闭文件
            fs.close(fd,function (err) {
                if(!err){
                    console.log("文件已关闭");
                }
            })
        })
    }
});