function fun() {
  alert(this.name);
}

var obj = {
  name: 'obj',
  sayName: function() {
    alert(this.name);
  }
};

// var obj2 = { name: 'obj2' };

//这三种都能调用函数
// fun(); //函数调用 this 是window

// fun.call(obj);
// fun.apply(obj2);  //call(); apply(); this是第一个参数

//obj.sayName.apply(obj2); //--> "obj2"

//有参数
function fun2(a, b) {
  console.log('a=' + a);
  console.log('b =' + b);
}

//fun2.call(obj);//undefiend
fun2.call(obj, 2, 3); //实参在第一个参数（对象）之后依次传递
fun2.apply(obj, [2, 3]); //apply()需要将实参封装在一个数组中传递