
//js

/*toString----------------------
HBuilder 里显示框 ：
打印对象时，实际上是输出的对象的toString()方法的返回值
如果我们不希望输出[object object]可以为对象添加一个toString()方法
*/


function Person (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}


//创建实例

var per = new Person("swk", 43, "nan");

var per2 = new Person("zbj",  32, "nms");


Person.prototype.toString = function() {
    return "Person[name =" + this.name + ",age =" + this.age + ",gender =" + this.gender + "]";
}


console.log(per);   //Person { name: 'swk', age: 43, gender: 'nan' }
console.log(per.toString()); //Person[name = swk, age = 43, gender = nan]

console.log(per.hasOwnProperty("toString")); // false
console.log(per.__proto__.hasOwnProperty("toString"));  //true
console.log(per.__proto__.__proto__.hasOwnProperty("toString"));//true

console.log(per2); //Person { name: 'zbj', age: 32, gender: 'nms' }