/**
 * Created by lye on 16/5/3.
 */

// 判断arr是否为一个数组，返回一个bool值
var students = new Array();

//var students = [];
function isArray() {
    // your implement
    alert(students instanceof Array);


    //方法二
    //return Array.isArray(arr);

    //方法三
    //renturn Object.prototype.toString.call(arr) == '[object Array]'

}




// 判断fn是否为一个函数，返回一个bool值
function isFunction(students) {
    // your implement
    return typeof students ==='function';
}

    isFunction();


   //方法二
   //return fn instanceof Function;

   //方法三
   //return Object.prototype.toString.call(fn) =='[oblect Array]';


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
    for(var i =0; i < arr.length;i++){
        if(newArr.indexOf(arr[i]) == -1){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// 使用示例
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]


//方法二

//function uniqArray(arr){
//    var newArray = [];
//    if(arr instanceof Array){
//        arr.sort();
//        for(var i = 0; i< arr.length ; i++){
//            if(arr[i] !== arr[i+1]){
//                newArray.push(arr[i]);
//            }
//        }
//    }
//    return newArray;
//}


//方法三
//function uniqArray(arr){
//    if( arr instanceof Array){
//        var newArray = [];
//        for(var i = 0; i<arr.length;i++){
//            newArray.push(arr[i]);
//
//            for(var j =i+1;j<=arr.length;j++){
//                if(arr[i] === arr[j]){
//                    newArray.pop(arr[j]);
//                }
//            }
//        }
//    }
//    return newArray;
//}



// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符

//var textTrim = " hello I'm a beautiful girl";
//
//var showText = textTrim.trim();
//alert(showText);



// 实现一个简单的trim函数，用于去除一个字符串，头部和尾部的空白字符
// 假定空白字符只有半角空格、Tab
// 练习通过循环，以及字符串的一些基本方法，分别扫描字符串str头部和尾部是否有连续的空白字符，并且删掉他们，最后返回一个完成去除的字符串
function simpleTrim(str) {
    // your implement

    //方法一
    //去除左边空格
    function trimLeft(str){
        var writeSpace = new String(" /n/r/t");
        var src = new String(str);
        if(writeSpace.indexOf(src.charAt(0)) !=-1){
            var j = 0, i = src.length;
            while(j<i && writeSpace.indexOf(src.charAt(j))!=-1){

                j++;

            }
            src = src.substring(j,i);
        }
    }


    //去除右边空格

    function trimRight(str){
        var writeSpace = new String(" /n/t/r");
        var src = new String(str);
        if(writeSpace.lastIndexOf(src.charAt(0)) !=-1){
            var i =str.length-1;
            while(i>0 && writeSpace.lastIndexOf(src.charAt(0))!=0){
                i--;
            }
            src = str.substring(0,i+1);
        }
        return src;
    }


}

var textString = "   wwwwwwin     ";
var b = simpleTrim(textString);


//方法二：
function trim(str){
    return str.replace(/\s+/g, "");
}




// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    // your implement

    for(var i = 0;i<arr.length;i++){
        fn(arr[i],i);
    }

}


function each(arr,fn){
    for(var i =0;i<arr.length;i++){
        fn(arr[i],i);
    }
}


// 其中fn函数可以接受两个参数：item和index
//var arr = ['java', 'c', 'php', 'html'];
//function output(item, index) {
//    console.log(index + ': ' + item)
//}
//each(arr, output);




// 获取一个对象里面第一层元素的数量，返回一个整数
     function getObjectLength(obj) {
         //方法一：
         return Object.getOwnPropertyNames(obj).length;

         //方法二:
         //for(var i in obj){
         //    count ++;
         //}
         //return count;


 }

// 使用示例
     var obj = {
         a: 1,
         b: 2,
         c: {
             c1: 3,
             c2: 4
         }
     };
     console.log(getObjectLength(obj)); // 3



// 判断是否为邮箱地址
function isEmail(emailStr) {
    // your implement
  var regEm = /([a-z\d_-]+)@([a-z\d_-]+)\.[a-z]{2,4}/ig;
  return regEm.test(emailStr)
}

// 判断是否为手机号
function isMobilePhone(phone) {
    // your implement

    var regEm = /^\d{11}$/g;
    return regEm.test(phone);
}



//为element增加一个样式名为newClassName的新样式
function addClass(element,newClassName){
    //var newCla = document.createElement(newClassName);
    //document.body.appendChild(newCla);

    //判断className是否有值，如果没有给它添加newClassName新样式
    if(!element.className){
        element.className = value;
    }else{
        newClassName = element.className;
        newClassName = " ";
        newClassName += value;
        element.className = newClassName;
    }
}



// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    // your implement

    //element.removeChild(oldClassName);
    if(element.className == oldClassName){
        try{
            element.removeAttribute("class");
        }
         catch(ex){
             element.className = "";
    }

    }
}



// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    // your implement
    var nodes = element.parentnode.childNodes;
    for(var i = 0;i<nodes.length;i++){
        if(nodes[i] === isSiblingNode){
            return true;
        }
        else{
            return false;
        }
    }

}

////方法二:
//retrun (element.parentNode === siblingNode.parentNode);



// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    // your implement
    var posRect = element.getBoundingClientRect();
    var docTop = document.documentElement.clientTop;
    var docLeft = document.documentElement.clientLeft;

    return {
        x: posRect.top - docTop ,
        y: posRect.left - docLeft
    }


}
// your implement


// 实现一个简单的Query

function $(selector) {
    //将传入的选择器以空格符隔开生成数组
    var selItem = selector.split(" ");
    //如果数组长度为1，表示选择器只传入一个样式
    if (selItem.length === 1) {
        // 将数组转变成字符串
        var aitem = selItem.toString();
        // 通过switch取字符串第一个字符来判断选择器类型
        switch (aitem.substr(0, 1)) {
            //为id选择器
            case "#":
                return document.getElementById(aitem.substr(1));
                break;
            //为class选择器
            case ".":
                if (document.getElementsByClassName) {
                    return document.getElementsByClassName(aitem.substr(1))
                }
                else {
                    //获取全部元素
                    var nodes = document.getElementsByTagName("*");
                    var tar = [];
                    for(i = 0; i < nodes.length; i++) {
                        //遍历全部元素节点，若节点有传入的选择器属性则存入数组
                        if(hasClass(nodes[i],aitem.substr(1))){
                            tar.push(nodes[i])
                        }
                    }
                    return tar;
                }
                break;
            //为指定属性名选择器
            case "[":
                //检查[]是否完整
                if (aitem.charAt(aitem.length - 1) === "]") {
                    //取[]中间的字符串
                    var item = aitem.substring(1, aitem.length - 1);
                    var elements = document.getElementsByTagName("*");
                    //查找字符串中是否有=号
                    if (item.indexOf("=") != -1) {
                        //若有=号，将字符串以=号分隔成数组
                        var items = item.split("=");
                        //遍历所有元素
                        for (var j = 0; j < elements.length; j++) {
                            //判断是否有节点拥有传入的属性名，且属性值一致，若找到则返回该节点
                            if (elements[j].getAttribute( items[0] ) === items[1]) {
                                return elements[j];
                            }
                        }
                    }
                    //若字符串无=号
                    else {
                        for ( var i = 0; i < elements.length; i++ ) {
                            //返回匹配该属性名的第一个节点
                            if (elements[i].hasAttribute(item)) {
                                return elements[i];
                            }
                        }
                    }
                }
                // 如果[]不完整，则抛出错误
                else {
                    throw Error( "']' is missing !" );
                }
                break;
            //默认排除以上选择器，返回元素名选择器
            default :
                return document.getElementsByTagName(aitem);
        }
    }
    //若传入的字符串含有多个选择器
    //以下并没有考虑getElementsByClassName的兼容...
    else {
        for (var k = 1; k < selItem.length; i++) {

            if (selItem[0].substr(0, 1) == "#") {
                var itemId = document.getElementById(selItem[0].substr(1));
                switch (selItem[k].substr(0,1)) {
                    case ".":
                        return itemId.getElementsByClassName(selItem[k].substr(1))[0];
                        break;
                    default :
                        return itemId.getElementsByTagName(selItem[k]);
                }
            }
            else if (selItem[0].substr(0, 1) == ".") {
                var itemClass = document.getElementsByClassName(selItem[0].substr(1));
                switch (selItem[k].substr(0, 1)) {
                    case "#":
                        return itemClass.getElementById(selItem[k].substr(1));
                        break;
                    case ".":
                        return itemClass.getElementsByClassName(selItem[k].substr(1))[0];
                        break;
                    default :
                        return itemId.getElementsByTagName(selItem[k]);
                }
            }
        }
    }
}




// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    // your implement
    if(element.addEventListener){
        element.addEventListener(event,listener,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+event,listener);
    }else{
        element["on" + event];
    }
}



// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    // your implement
    if(element.removeEventListener){
        element.removeEventListener(event,listener,false);
    }else if(element.detachEvent){
        element.detachEvent("on"+event,listener);
    }else{
        element["on" +event] =null;
    }

}



// 实现对click事件的绑定
function addClickEvent(element, listener) {
    // your implement
    if(element.addEventListener){
        element.addEventListener(click,listener,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+click,listener);
    }else{
        element["on"+click];
    }
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    // your implement
    var e = event ? evet:window.event;
    var ele = element? e.target: e.srcElement;
    var curKey = 0;
    curKey = e.keyCode;
    if(e.keyCode == 13){
        listener();
    }
}


/**
 * 遍历元素添加事件
 *
 * @param {Object} element 传入DOM节点元素
 * @param {string} tag 传入子节点标签名
 * @param {string} eventName 传入事件名称
 * @param {string | Function} listener 传入函数名称或匿名函数
 */
function delegateEvent(element, tag, eventName, listener) {
    var e = event ? event : window.event;
    var ele = element ? element : document.body;
    var eleChild = ele.children;
    for ( var i = 0 ; i < eleChild.length ; i++ ) {
        if ( eleChild[i].nodeName === tag
            || eleChild[i].nodeName.toLowerCase() === tag
        ) {
            addEvent(eleChild[i], eventName, listener);
        }
    }
}

$.delegate = function(element, tag, eventName, listener) {
    delegateEvent(element, tag, eventName, listener);
};






$.on = function(element,event,listener){
    addEvent(element,event,listener)
};

$.un = function(element,event,listener){
    removeEvent(element,event,listener)
};

$.click = function(element,event,listener){
    addClickEvent(element,listener)
};

$.enter = function(element,listener){
    addEnterEvent(element.listener)
};






// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {
    // your implement
    var ua = navigator.userAgent;
    if(ua.indexOf("MSIE")!=-1){
        switch(true){
            case ua.indexOf("MSIE 6.0" )!= -1:
                return "IE6";
                break;
            case ua.indexOf("MSIE 7.0") != -1:
                return "IE7";
                break;
            case ua.indexOf("MISE 8.0") != -1:
                return "IE8";
                break;
            case ua.indexOf("MISE 9.0") !=-1 :
                return "IE9";
                break;
            case  ua.indexOf("MISE 10.0")!=-1:
                return "IE10.0";
                break;
            default :
                return -1;
        }
    }

}


// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    // your implement
    var cookieText = encodeURIComponent(cookieName)
                    + "="
                     + encodeURIComponent(cookieValue);
    if(expiredays instanceof Date){
        cookieText += "; expire =" +expiredays.toGMTString();
    }
    document.cookie = cookieText;
}



// 获取cookie值
function getCookie(cookieName) {
    // your implement
    var coName = encodeURIComponent(cookieName) + "=";
    var coStart = document.cookie.indexOf(coName);
    var coValue = null;

    if( coStart > -1 ){
        var coEnd = document.cookie.indexOf(";",coStart);
        if(coEnd == -1){
            coEnd = document.cookie.length;
        }
        coValue = decodeURIComponent(
            document.cookie.substring(coStart + coName.length,coEnd)
        );
    }
    return coValue;
}



//学习Ajax，并尝试自己封装一个Ajax方法。实现如下方法：
function ajax(url, options) {
    // your implement
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            options.onfail(xhr.responseText, xhr);
        } else {
            options.onsuccess(xhr.responseText,xhr);
        }

    }

};



function addURLParam(data){
    var pair = [];
    if(data instanceof string){
        data  = encodeURIComponent(data);
    }else if(data instanceof Object){
        for(var i = 0;i<data.length;i++){
            if(data.hasOwnProperty(i)){
                pair.push(i + "=" + data[i].toString());
            }
        }
        data = encodeURIComponent( pair.join("&"));
    }
    return data;

}


//方法为GET时
if(options.type = "GET"){
    if(options.data != null){
        url += addURLParam(options.data);
    }
    xhr.open("get" , url ,false);
    xhr.send(null);
}

//使用POST时
else if (options.type = "POST"){
    xhr.open("post",url,true);
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    if(options.data !=null){
        xhr.send(addURLParam(options.data));
    }
}

// 使用示例：
ajax(
    'http://localhost:8080/server/ajaxtest',
    {
        data: {
            name: 'simon',
            password: '123456'
        },
        onsuccess: function (responseText, xhr) {
            console.log(responseText);
        }
    }
);


//options是一个对象，里面可以包括的参数为：
//
//type: post或者get，可以有一个默认值
//data: 发送的数据，为一个键值对象或者为一个用&连接的赋值字符串
//onsuccess: 成功时的调用函数
//onfail: 失败时的调用函数





//组织事件冒泡

function stopBubble(e){
    //如果提供了时间对象，则这是一个非IE浏览器
    if(e && e.stopPropagation){
        //因此它支持w3c的stopPropagation()方法
        e.stopPropagation();
    }else{
        //否则需要使用IE的方式来取消时间冒泡
        window.event.cancelBubble = true;
    }
}


//组织事件默认行为

function stopDefault (e) {
    //阻止默认浏览器动作(W3C)
    if(e && e.preventDefault){
        e.preventDefault();
    }else{
        //IE中阻止函数器默认动作方式
        window.event.returnValue = false;
    }
    return false;
}









































