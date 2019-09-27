
/* 转换成 Number --------------------------------------------------------- */



//method 1 Number()函数
var h = "123";
    h = Number(h);

    console.log(h);       //123
    console.log(typeof h); //number
    


var k = "meawo";
    k = Number(k);

console.log(k);  // NaN(只要有非数字就转成NaN)
console.log(typeof k);    //number



var kk ="  ";
    kk = Number(kk);
    console.log(kk);        //空串转成 0
    console.log(typeof kk);  // number
    
    
    
var g = true;
    g = Number(g);  
    console.log(g);         //ture --> 1
    console.log(typeof g);  // number
    
    
var  p = false;
    p = Number(p);
    console.log(p);          //null --> 0
    console.log(typeof p);   // number
    


var w = null;
    w = Number(w);
console.log(w);          //null --> 0
console.log(typeof w);   // number
    
    


var  un = undefined;
    un = Number(un);
console.log(un);         //undefined --> NaN
console.log(typeof un);  // number
    
    


//method 2 (如果是含有非数字的字符串， 想取出整数 或 浮点数)



var l = "123pc";
    l = parseInt(l);
console.log(l);             //取出整数123
console.log(typeof l);      // number
    
    


var j = "2343423.32432px";
    j = parseFloat(j);
console.log(j);         //取出小数（浮点数)  2343423.32432
console.log(typeof j);   // number
    

var lj = "342.09302c";
    lj = parseInt(lj);         
console.log(lj);    //用 parseInt 取整  342
console.log(typeof lj);  // number
    
    
//非string 用 parseInt 或 parseFloat : 先转成string，然后再操作

var z = true;
    z = parseInt(z);
console.log(z);     // string "ture" --> NaN 
console.log(typeof z);  // number
    
    
