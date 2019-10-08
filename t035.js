//js

/*正则表达式简介--------

构造函数语法： var 变量 = new RegExp("正则表达式","匹配模式");
              麻烦，但()里可传变量 更灵活

测正则表达式的方法 ： test();

匹配模式：g --> 全局匹配模式
         i --> 忽略大小写


 字面量创建语法： var 变量 =/正则表达式/匹配模式;
               简单 ，不灵活，写死了


任意字母/[A-z]/
任意小写字母/[a-z]/
任意大写字母/[A-Z]/

[ab] == a|b 
[ ]里的内容也是或的关系


*/

//创建方式一： 构造函数---------最简单的正则表达式：找什么就写什么
var reg = new RegExp('a');
var str = 'abbb';

console.log(reg.test(str)); //有a 就是true

var rgb = new RegExp('a', 'i');
console.log(rgb.test('ABCD')); //true i 忽略大小写

var rea = new RegExp('[0-9]');
console.log(rea.test('avsdflhsdhs*(')); //false

//创建方式二： 字面量

var reg3 = /B/i;
console.log(reg3.test('DBJ')); //true

//检查是否有A或B或C
var ngb = /a|b|c/;
console.log(ngb.test('abcd'));

//检查是否有字母
var mng = /[A-z]/;
console.log(mng.test('SSDKJDS'));

//检查是否有abc 或adc 或aec
var gfd = /a[abc]c/;
console.log(gfd.test('ac')); //false

//除了ab
var dsd = /[^ab]/;
console.log(dsd.test('c')); //ture

//除了数字
var sde = /[^0-9]/;
console.log(sde.test('oup23')); //ture 含有除了数字的东西
