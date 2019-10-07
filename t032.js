//js

/*数组遍历----------------------*/

var arr = ['abj', 'swk', 'shs', 'tz'];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]); //i --> index
}

//练习1：
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.toString = function() {
  return 'Person[name,=' + this.name + ',age=' + this.age + ']';
};

var per = new Person('sek', 12);
var per2 = new Person('sdkj', 23);
var per3 = new Person('kdhk', 32);
var per4 = new Person('kjha', 6);
var per5 = new Person('sjhdj', 98);
var per6 = new Person('jkghdi', 72);

//将这些person对象放在一个数组中
var perArr = [per, per2, per3, per4, per5, per6];
console.log(perArr);

//创建一个函数，从 perArr 里提取18以上的人 ，封装并返回

// document.write(perArr[0] + '<br>');
// document.write(perArr[1] + '<br>');
// document.write(perArr[2] + '<br>');
// document.write(perArr[3] + '<br>');
// document.write(perArr[4] + '<br>');
// document.write(perArr[5] + '<br>');

// document.write('<br>');

// document.write(perArr[0].age + '<br>');
// document.write(perArr[1].age + '<br>');
// document.write(perArr[2].age + '<br>');
// document.write(perArr[3].age + '<br>');
// document.write(perArr[4].age + '<br>');
// document.write(perArr[5].age + '<br>');

function getAdult() {
  var newArr = [];

  var adult = 18;

  for (var a = 0; a < perArr.length; a++) {
    if (perArr[a].age >= adult) {
      var p = perArr[a].age;
      newArr.push(p);
    } //else{document.write("不是成人"+"<br>");}
  }

  return newArr;
}

var result = getAdult();
console.log('result', +result);
