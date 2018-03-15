/*
    引入外部模块/
        通过require()  函数来引入外部模块。
        在require()需要一个模块的标识为参数。
          -对于  文件模块（自定义模块），模块标识就是模块的路径。
          使用相当路径

 */
var mi = require("./02_module");
var my = require("./04_math")
var result = my.mul(1,3);
console.log(result);
/*
console.log(mi);
console.log(mi.a);
mi.fn();
*/