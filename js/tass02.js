/**
 * Created by lye on 16/5/3.
 */

// 判断arr是否为一个数组，返回一个bool值
var students = new Array();

//var students = [];
function isArray() {
    // your implement
    alert(students instanceof Array);

}




// 判断fn是否为一个函数，返回一个bool值
function isFunction(students) {
    // your implement
    return typeof students ==='function';
}

    isFunction();


// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等


function cloneObject(src) {
    // your implement
    var tar = src.constructor === Array ? []:{};
    for (i in src ){
        if(i in src){
            tar[i] = typeof src[i] === "object" ? cloneObject(src[i]) :src[i];
        }
    }

    return tar;

}

//测试用例

var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};

var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "hello";


console.log(abObj.a) ;
console.log(abObj.b.b1[0]);

console.log(tarObj.a);   // 1
console.log(tarObj.b.b1[0]);   //hello






// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr) {
    // your implement
    var newArr = [];
    for(var i =0; i<newArr.length;i++){
        if(newArr.indexOf(this[i]) == -1){
            newArr.push();
        }
    }
}

// 使用示例
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]




// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符

var textTrim = " hello I'm a beautiful girl";

var showText = textTrim.trim();
alert(showText);









