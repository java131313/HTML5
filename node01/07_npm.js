var math = require("math");
/*
    包的搜索的流程
     - 当我们在项目引入了通过npm 下载的包时。
        npm首先会在当前模块所在目录的node_modules下去寻找指定的包
        Buffer(缓冲区)
           -Buffer和数组非常类似，都是用来存储数据

 */
//创建一个Buffer
var str = "Hello Atkxy";
//将字符串保存到一个Buffer.
var buf = Buffer.from(str);
//Buffer.allocUnsale() 创建一个指定大小的buffer
//可能包含敏感数据
var buf2 = Buffer.allocUnsafe(100);

buf2 = Buffer.alloc(8);
//向buffer中添加元素  2c 44 101100   1*00101100  00~ff
buf2[0] = 10;
buf2[1] = 20;
buf2[2] = 200;
buf2[3] = 300;
//console.log(buf);
console.log(buf2);
