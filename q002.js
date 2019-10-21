//  javascript 对象

var book = {
  // 对象是有花括号括起来的
  topic: 'javascript', //属性 topic 的值是 JavaScript
  fat: true // 属性fat的值是true
}; // 右花括号标记了对象的结束

// 通过"." 或 "[]" 来访问对象属性

book.topic; // => javascript
book['fat']; // =? true : 另外一种获取属性值的方式
book.author = 'flanagan'; // 通过赋值创建一个新属性
book.contents = {}; // {}  是一个空对象, 没有属性

// JavaScript  同样支持数组(以数字为索引的列表)

var primes = [2, 3, 4, 5]; // 拥有四个值的数组
primes[0]; // => 值为 2, 数组中的第一个元素 (索引为 0)

primes.length; // => 4,  数组中的元素个数
primes[primes.length - 1]; // => 7 ,  数组最后一个元素
primes[4] = 9; //  通过赋值来添加新元素
primes[4] = 11; //  通过赋值来 改变已有的元素
var empty = []; // []  是空数组, 有0 分元素
empty.length; //  => 长度为 0

// 数组 和 对象中都可以包含另一个数组 或对象:

var points = [
  // 具有两个元素 的 数组
  { x: 0, y: 0 }, // 每个元素都是 一个对象
  { x: 1, y: 1 }
];

var data = {
  // 包含两个属性的对象
  trial1: [[1, 1], [3, 4]], //  每一个属性都是数组
  trial2: [[2, 35], [3, 54]] //  数组的元素也是数组
};
