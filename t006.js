
//javascript 


// js 代码按顺序一行一行执行， 但是alert即使放在最下面也会先蹦出来
// 这是三个输出语句


// document.write("look at me!");

// console.log("i am here0-0");

// alert("hereos come back");



// var  a = 123;

//     a = 567;

// var b = 433454;
// var age = 23;
// console.log(a);
// console.log(b);
// console.log(age);




/*旧的：六种数据类型 */


// var b = "this is string";

//     b = 'this is a string either';
//     b = 'linlg: "good day"';
//     b = "ling: \"good day enheng? \" ";


//  //转义字符

// b = " ling: \"good day, \n enheng? \""
// // be carful: the chinese comma and english comma

// b = " \\"

// // 斜杠: 我自己转义自己


// console.log(typeof b);
// console.log(b);



// var srt = " text";
// alert(srt); //输出变量

// alert("str");//输出字符串

// console.log(srt);
// console.log(typeof srt);




/* number */


// var n = 123; //数字 123
// var m = "123"; //string 123

// console.log(n);
// console.log(typeof n);

// console.log(m);
// console.log(typeof m);



//console.log(Number.MAX_VALUE);//1.7976931348623157e+308 最大值


var mx = Number.MAX_VALUE * Number.MAX_VALUE;
console.log(mx);                                //infinity 正无穷



var mi = -Number.MAX_VALUE * Number.MAX_VALUE;
console.log(mi);                                //-infinity 负无穷


var inf = Infinity; //注意Infinity首字母大写
console.log(inf);
console.log(typeof inf);


var noNumber = "abc" * "123";
console.log(noNumber);  //NaN : Not A Number  typeof类型： 也是Number

var min = Number.MAX_VALUE;
console.log(min);       //5e-324 0以上最小值，最小的正小数


