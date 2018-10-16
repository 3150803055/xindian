/*！
*XX
*date:2017-01-01
*author: xx;
*/

//申明一个函数，该函数用来创建网页主要内容的其他部分
function newTagname(classname, id, newclassname, tagname, newid) {
    if (id !== "") {
        var first = document.getElementById(id);
        var purchase = document.createElement(tagname);
        purchase.id = newid;
        purchase.className = newclassname;
        first.appendChild(purchase);
    } else {
        var seccond = document.getElementsByClassName(classname)[0];
        var purchase = document.createElement(tagname);
        purchase.id = newid;
        purchase.className = newclassname;
        seccond.appendChild(purchase);
    }
}

//定义一个向div盒子中写如html语法的函数
function writehtml(classname, inner) {
    var length = document.getElementsByClassName(classname).length;
    var inner1 = document.getElementsByClassName(classname)[length - 1];
    inner1.innerHTML = inner;
    // "<img src='images/lihdbg2.png'><span>采购</span>";
}

//创建项目板块
newTagname("", "contain-now", "", "li", "contain-program");
newTagname("", "contain-program", "contain-type", "div", "program");//模块第一栏
newTagname("", "program", "style1", "div", "contain-top-left");
writehtml("style1", "<img src='images/lihdbg1.png'><span>工程</span>");//添加图标和文字
newTagname("", "program", "style2", "div", "contain-top-right");
writehtml("style2", "<span>公开招标</span>");//li模块顶部右边文字
newTagname("", "contain-program", "contain-name", "div", "program-name");//第二栏
newTagname("", "contain-program", "contain-msg", "div", "program-msg");//第三栏
writehtml("contain-msg", "<p class='message'></p>");
newTagname("", "contain-program", "contain-info1", "div", "program-info1");//第四栏
newTagname("", "program-info1", "program-info1-1 style1", "div", "doc-money");
newTagname("", "program-info1", "program-info1-2 style2", "div", "doc-autum");
newTagname("", "contain-program", "contain-info2", "div", "program-info2");//第五栏
newTagname("", "program-info2", "program-info2-1 style1", "div", "pro-money");
newTagname("", "program-info2", "program-info2-2 style2", "div", "pro-autum");
newTagname("", "contain-program", "contain-info3", "div", "program-info3");//第六栏
newTagname("", "program-info3", "program-info3-1 style1", "div", "runtime");
newTagname("", "program-info3", "program-info3-2 style2", "div", "datetime");
newTagname("", "contain-program", "contain-info4", "div", "program-info4");//第七栏
newTagname("", "program-info4", "program-info4-1 style1", "div", "starttime");
newTagname("", "program-info4", "program-info4-2 style2", "div", "endtime");


//创建采购板块
newTagname("", "contain-now", "", "li", "contain-purchase");
newTagname("", "contain-purchase", "contain-type", "div", "purchase");//模块第一栏
newTagname("", "purchase", "style1", "div", "contain-top-left");
writehtml("style1", "<img src='images/lihdbg2.png'><span>采购</span>");//添加图标和文字
newTagname("", "purchase", "style2", "div", "contain-top-right");
writehtml("style2", "<span>单一来源</span>");//li模块顶部右边文字
newTagname("", "contain-purchase", "contain-name", "div", "purchase-name");//第二栏
newTagname("", "contain-purchase", "contain-msg", "div", "purchase-msg");//第三栏
writehtml("contain-msg", "<p class='message'></p>");
newTagname("", "contain-purchase", "contain-info1", "div", "purchase-info1");//第四栏
newTagname("", "purchase-info1", "program-info1-1 style1", "div", "doc-money");
newTagname("", "purchase-info1", "program-info1-2 style2", "div", "doc-autum");
newTagname("", "contain-purchase", "contain-info2", "div", "purchase-info2");//第五栏
newTagname("", "purchase-info2", "program-info2-1 style1", "div", "pro-money");
newTagname("", "purchase-info2", "program-info2-2 style2", "div", "pro-autum");
newTagname("", "contain-purchase", "contain-info3", "div", "purchase-info3");//第六栏
newTagname("", "purchase-info3", "program-info3-1 style1", "div", "runtime");
newTagname("", "purchase-info3", "program-info3-2 style2", "div", "datetime");
newTagname("", "contain-purchase", "contain-info4", "div", "purchase-info4");//第七栏
newTagname("", "purchase-info4", "program-info4-1 style1", "div", "starttime");
newTagname("", "purchase-info4", "program-info4-2 style2", "div", "endtime");

//创建土地模板
newTagname("", "contain-now", "", "li", "contain-land");
newTagname("", "contain-land", "contain-type", "div", "land");//模块第一栏
newTagname("", "land", "style1", "div", "contain-top-left");
writehtml("style1", "<img src='images/lihdbg3.png'><span>土地</span>");//添加图标和文字
newTagname("", "land", "style2", "div", "contain-top-right");
writehtml("style2", "<span>有底牌挂价</span>");//li模块顶部右边文字
newTagname("", "contain-land", "contain-name", "div", "land-name");//第二栏
newTagname("", "contain-land", "contain-msg", "div", "land-msg");//第三栏
writehtml("contain-msg", "<p class='message'></p>");
newTagname("", "contain-land", "contain-info1", "div", "land-info1");//第四栏
newTagname("", "land-info1", "program-info1-1 style1", "div", "doc-money");
newTagname("", "land-info1", "program-info1-2 style2", "div", "doc-autum");
newTagname("", "contain-land", "contain-info2", "div", "land-info2");//第五栏
newTagname("", "land-info2", "program-info2-1 style1", "div", "pro-money");
newTagname("", "land-info2", "program-info2-2 style2", "div", "pro-autum");
newTagname("", "contain-land", "contain-info3", "div", "land-info3");//第六栏
newTagname("", "land-info3", "program-info3-1 style1", "div", "runtime");
newTagname("", "land-info3", "program-info3-2 style2", "div", "datetime");
newTagname("", "contain-land", "contain-info4", "div", "land-info4");//第七栏
newTagname("", "land-info4", "program-info4-1 style1", "div", "starttime");
newTagname("", "land-info4", "program-info4-2 style2", "div", "endtime");

//产权板块
newTagname("", "contain-now", "", "li", "contain-property");
newTagname("", "contain-property", "contain-type", "div", "property");//模块第一栏
newTagname("", "property", "style1", "div", "contain-top-left");
writehtml("style1", "<img src='images/lihdbg4.png'><span>产权</span>");//添加图标和文字
newTagname("", "property", "style2", "div", "contain-top-right");
writehtml("style2", "<span>有底牌挂价</span>");//li模块顶部右边文字
newTagname("", "contain-property", "contain-name", "div", "property-name");//第二栏
newTagname("", "contain-property", "contain-msg", "div", "property-msg");//第三栏
writehtml("contain-msg", "<p class='message'></p>");
newTagname("", "contain-property", "contain-info1", "div", "property-info1");//第四栏
newTagname("", "property-info1", "program-info1-1 style1", "div", "doc-money");
newTagname("", "property-info1", "program-info1-2 style2", "div", "doc-autum");
newTagname("", "contain-property", "contain-info2", "div", "property-info2");//第五栏
newTagname("", "property-info2", "program-info2-1 style1", "div", "pro-money");
newTagname("", "property-info2", "program-info2-2 style2", "div", "pro-autum");
newTagname("", "contain-property", "contain-info3", "div", "property-info3");//第六栏
newTagname("", "property-info3", "program-info3-1 style1", "div", "runtime");
newTagname("", "property-info3", "program-info3-2 style2", "div", "datetime");
newTagname("", "contain-property", "contain-info4", "div", "property-info4");//第七栏
newTagname("", "property-info4", "program-info4-1 style1", "div", "starttime");
newTagname("", "property-info4", "program-info4-2 style2", "div", "endtime");


//创建项目板块
newTagname("", "contain-end", "", "li", "contain-end-program");
newTagname("", "contain-end-program", "contain-type", "div", "end-program");//模块第一栏
newTagname("", "end-program", "style1", "div", "contain-top-left");
writehtml("style1", "<img src='images/lihdbg1.png'><span>工程</span>");//添加图标和文字
newTagname("", "end-program", "style2", "div", "contain-top-right");
writehtml("style2", "<span>公开招标</span>");//li模块顶部右边文字
newTagname("", "contain-end-program", "contain-name", "div", "program-end-name");//第二栏
newTagname("", "contain-end-program", "contain-msg", "div", "program-end-msg");//第三栏
writehtml("contain-msg", "<p class='message'></p>");
newTagname("", "contain-end-program", "contain-info1", "div", "program-end-info1");//第四栏
newTagname("", "program-end-info1", "program-info1-1 style1", "div", "doc-money");
newTagname("", "program-end-info1", "program-info1-2 style2", "div", "doc-autum");
newTagname("", "contain-end-program", "contain-info2", "div", "program-end-info2");//第五栏
newTagname("", "program-end-info2", "program-info2-1 style1", "div", "pro-money");
newTagname("", "program-end-info2", "program-info2-2 style2", "div", "pro-autum");
newTagname("", "contain-end-program", "contain-info3", "div", "program-end-info3");//第六栏
newTagname("", "program-end-info3", "program-info3-1 style1", "div", "runtime");
newTagname("", "program-end-info3", "program-info3-2 style2", "div", "datetime");
newTagname("", "contain-end-program", "contain-info4", "div", "program-end-info4");//第七栏
newTagname("", "program-end-info4", "program-info4-1 style1", "div", "starttime");
newTagname("", "program-end-info4", "program-info4-2 style2", "div", "endtime");


//创建采购板块
newTagname("", "contain-end", "", "li", "contain-end-purchase");
newTagname("", "contain-end-purchase", "contain-type", "div", "end-purchase");//模块第一栏
newTagname("", "end-purchase", "style1", "div", "contain-top-left");
writehtml("style1", "<img src='images/lihdbg2.png'><span>采购</span>");//添加图标和文字
newTagname("", "end-purchase", "style2", "div", "contain-top-right");
writehtml("style2", "<span>单一来源</span>");//li模块顶部右边文字
newTagname("", "contain-end-purchase", "contain-name", "div", "end-purchase-name");//第二栏
newTagname("", "contain-end-purchase", "contain-msg", "div", "end-purchase-msg");//第三栏
writehtml("contain-msg", "<p class='message'></p>");
newTagname("", "contain-end-purchase", "contain-info1", "div", "end-purchase-info1");//第四栏
newTagname("", "end-purchase-info1", "program-info1-1 style1", "div", "doc-money");
newTagname("", "end-purchase-info1", "program-info1-2 style2", "div", "doc-autum");
newTagname("", "contain-end-purchase", "contain-info2", "div", "end-purchase-info2");//第五栏
newTagname("", "end-purchase-info2", "program-info2-1 style1", "div", "pro-money");
newTagname("", "end-purchase-info2", "program-info2-2 style2", "div", "pro-autum");
newTagname("", "contain-end-purchase", "contain-info3", "div", "end-purchase-info3");//第六栏
newTagname("", "end-purchase-info3", "program-info3-1 style1", "div", "runtime");
newTagname("", "end-purchase-info3", "program-info3-2 style2", "div", "datetime");
newTagname("", "contain-end-purchase", "contain-info4", "div", "end-purchase-info4");//第七栏
newTagname("", "end-purchase-info4", "program-info4-1 style1", "div", "starttime");
newTagname("", "end-purchase-info4", "program-info4-2 style2", "div", "endtime");


//创建土地模板
newTagname("", "contain-end", "", "li", "contain-end-land");
newTagname("", "contain-end-land", "contain-type", "div", "end-land");//模块第一栏
newTagname("", "end-land", "style1", "div", "contain-top-left");
writehtml("style1", "<img src='images/lihdbg3.png'><span>土地</span>");//添加图标和文字
newTagname("", "end-land", "style2", "div", "contain-top-right");
writehtml("style2", "<span>有底牌挂价</span>");//li模块顶部右边文字
newTagname("", "contain-end-land", "contain-name", "div", "land-end-name");//第二栏
newTagname("", "contain-end-land", "contain-msg", "div", "land-end-msg");//第三栏
writehtml("contain-msg", "<p class='message'></p>");
newTagname("", "contain-end-land", "contain-info1", "div", "land-end-info1");//第四栏
newTagname("", "land-end-info1", "program-info1-1 style1", "div", "doc-money");
newTagname("", "land-end-info1", "program-info1-2 style2", "div", "doc-autum");
newTagname("", "contain-end-land", "contain-info2", "div", "land-end-info2");//第五栏
newTagname("", "land-end-info2", "program-info2-1 style1", "div", "pro-money");
newTagname("", "land-end-info2", "program-info2-2 style2", "div", "pro-autum");
newTagname("", "contain-end-land", "contain-info3", "div", "land-end-info3");//第六栏
newTagname("", "land-end-info3", "program-info3-1 style1", "div", "runtime");
newTagname("", "land-end-info3", "program-info3-2 style2", "div", "datetime");
newTagname("", "contain-end-land", "contain-info4", "div", "land-end-info4");//第七栏
newTagname("", "land-end-info4", "program-info4-1 style1", "div", "starttime");
newTagname("", "land-end-info4", "program-info4-2 style2", "div", "endtime");


//产权板块
newTagname("", "contain-end", "", "li", "contain-end-property");
newTagname("", "contain-end-property", "contain-type", "div", "end-property");//模块第一栏
newTagname("", "end-property", "style1", "div", "contain-top-left");
writehtml("style1", "<img src='images/lihdbg4.png'><span>产权</span>");//添加图标和文字
newTagname("", "end-property", "style2", "div", "contain-top-right");
writehtml("style2", "<span>有底牌挂价</span>");//li模块顶部右边文字
newTagname("", "contain-end-property", "contain-name", "div", "property-end-name");//第二栏
newTagname("", "contain-end-property", "contain-msg", "div", "property-end-msg");//第三栏
writehtml("contain-msg", "<p class='message'></p>");
newTagname("", "contain-end-property", "contain-info1", "div", "property-end-info1");//第四栏
newTagname("", "property-end-info1", "program-info1-1 style1", "div", "doc-money");
newTagname("", "property-end-info1", "program-info1-2 style2", "div", "doc-autum");
newTagname("", "contain-end-property", "contain-info2", "div", "property-end-info2");//第五栏
newTagname("", "property-end-info2", "program-info2-1 style1", "div", "pro-money");
newTagname("", "property-end-info2", "program-info2-2 style2", "div", "pro-autum");
newTagname("", "contain-end-property", "contain-info3", "div", "property-end-info3");//第六栏
newTagname("", "property-end-info3", "program-info3-1 style1", "div", "runtime");
newTagname("", "property-end-info3", "program-info3-2 style2", "div", "datetime");
newTagname("", "contain-end-property", "contain-info4", "div", "property-end-info4");//第七栏
newTagname("", "property-end-info4", "program-info4-1 style1", "div", "starttime");
newTagname("", "property-end-info4", "program-info4-2 style2", "div", "endtime");

//将已截止的图片插入contain-end的li标签中
// var cutoff=document.getElementById("contain-end");
var b = document.getElementById("contain-end").getElementsByTagName("li");
for (var i = 0; i < b.length; i++) {
    var a = document.createElement("div");
    a.id = "cutoff";
    a.innerHTML = "<img src='images/cut-offBg.png'>";
    b[i].insertBefore(a, b[i].lastChild);
}


//ajax异步加载json中数据的方法
function loadXMLDoc(name, classname) {
    var xmlhttp;
    var txt, x, i;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            xmlDOc = xmlhttp.responseXML;
            txt = "";
            x = xmlDOc.getElementsByTagName(name);//取得json文件中某种相应的属性
            for (i = 0; i < x.length; i++) {
                txt = x[i].childNodes[0].nodeValue;
                // console.log(txt);
                document.getElementsByClassName(classname)[i].innerHTML = txt;//将该信息写入相应的div盒子中
            }
            // document.getElementById("").innerHTML=txt;
        }
    };
    xmlhttp.open("GET", "css/information.xml?t=" + Math.random(), true);
    xmlhttp.send();
}

loadXMLDoc("number", "contain-name");
loadXMLDoc("name", "message");
loadXMLDoc("docmoney", "program-info1-1");
loadXMLDoc("docautum", "program-info1-2");
loadXMLDoc("promoney", "program-info2-1");
loadXMLDoc("proautum", "program-info2-2");
loadXMLDoc("runtime", "program-info3-1");
loadXMLDoc("timedate", "program-info3-2");
loadXMLDoc("starttime", "program-info4-1");
loadXMLDoc("enddate", "program-info4-2");

//取消导航栏a标签的默认操作
var prevent = document.getElementById("tabs");

function f() {
    event.preventDefault() || (event.returnValue = false);//兼容ie8版本
}

prevent.addEventListener("click", f);


/*对于导航栏点击时背景颜色会产生变化*/
var tabs = document.getElementById("tabs").getElementsByTagName("li");
var alist = document.getElementById("tabs").getElementsByTagName("a");
for (var i = 0; i < alist.length; i++) {
    tabs[i].onclick = show;//绑定点击事件
}

function show() {
    for (var i = 0; i < alist.length; i++) {
        if (tabs[i] === this) {//对点击的链接进行循环
            alist[i].className = "active";//更改按钮背景颜色
        } else {
            alist[i].className = "";
        }
    }
}

