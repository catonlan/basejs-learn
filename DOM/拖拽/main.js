//js

/*拖拽练习

.onmousemove
.onmousedown
.onmouseup


---------*/

var box1 = document.getElementById('box1');

//1.鼠标按下时

box1.onmousedown = function(event) {
  //这个事件对象范围大
  console.log('鼠标onmousedown按下了~~');

  //div的水平偏移量 = 鼠标.clientX - 元素.offsetLeft
  //div的垂直偏移量 = 鼠标.clientY - 元素.offsetTop

  var ol = event.clientX - box1.offsetLeft;
  var ot = event.clientY - box1.offsetTop;

  //2.跟随鼠标移动

  document.onmousemove = function(event) {
    var x = event.pageX - ol; //减去div的水平偏移量
    var y = event.pageY - ot; //减去div的垂直偏移量

    box1.style.left = x + 'px';
    box1.style.top = y + 'px';
  };

  //3.当鼠标松开时，box1固定在当前位置
  document.onmouseup = function() {
    //取消document的onmousemove事件
    document.onmousemove = null;

    //取消document的onmouseup事件
    document.onmouseup = null; //变成一次性事件
  };
};
