/*
    模块化
        函数中有5个参数，这5个参数都可以直接在模块中使用。
         function(exports, require, module, __filename, __dirname)
                                                          - 在node中，使用CommonJS作为模块化的规范。
       -所谓的模块化就是将一个完整的程序分割成一个一个小的模块，

        -在node中，一个js文件就是一个模块， 要定义模块非常简单，直接创建
        一个js文件即可。
        - ndoe的模块的代码都是运行在一个独立的函数作用域中。
        -模块中的变量和函数默认情况下对于外部都是不可见的
 */
exports.a = 10;
var b =230;22
console.log("first module");
exports.fn = function () {
    console.log("hello module2");
}