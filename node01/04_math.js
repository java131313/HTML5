//可以直接多module.exports 进行赋值操作
/*module.exports = {
    a:1,
    b:2,
    b:3
}
exports = {
    a:1,
    b:2,
    c:3
}*/
//创建一个对象
var obj = {};
obj.a ={};

var a = obj.a;
a.name="宋江"
obj.a.age =18
a = { name: "猪八戒"}
//a obj.a
console.log( a == obj.a );
console.log(obj.a);
console.log(a);