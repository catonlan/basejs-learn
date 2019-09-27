

/* 了解一下： 其他进制数字 --------------------------------------------------------- */



//16 进制 0x 

var y = 0x10;       //0xff , 0xCafe,
console.log(y);     //16



//8 进制 0开头

var unm = 070;
console.log(unm);  //56



//2进制 用的不多 浏览器兼容性不好 0b 开头


//string --> number
var yu = "070";
    yu = parseInt(yu);
    console.log(yu);        //70
    console.log(typeof yu); // number
    
    

    //有些浏览器会把这个当成8进制，有些当成10进制
    //解决办法--> 加第二个参数

    var su = "070";
        su = parseInt(su,  8);
        console.log(su);            //56
        console.log(typeof su);     // number
        
//尽量不要用0开头表示数字 很麻烦






/* 转换成 Boolean --------------------唯有js 可以做------------------记住！--------------------- */
// method 1 : Boolean()函数


var bo = 231;
    bo = Boolean(bo);
    console.log(bo);            //true 数字转Boolean 除了0，NaN 其余都是True
    console.log(typeof bo);
    
    
var bo1 = "hhhhh";
    bo1 = Boolean(bo1);
    console.log(bo1);           //true  string 转Boolean 除了空串 其余都是True
    console.log(typeof bo1);
    

//Null , undefined --> false

//object -->ture 


  

//method 2 : !! 隐式类型转换成Boolean 用两次非运算 (推荐 更简单)

var bo2 = "dfhjlsjdl";
    bo2 = !!bo2;
console.log(bo2);   //true
console.log(typeof bo2);    //boolean
    
    