
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
    
    