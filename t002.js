// js document


/* 转换 string --------------------------------------------------------------- */

//method 1  调用被转换数据类型的 toString()方法
            //null 和 undefined 转不了会报错


var a =123;

console.log(a);
console.log(typeof a); //data type:number 123


var a = a.toString();
console.log(a);
console.log(typeof a); //data type:string 123


var b = true;
console.log(b);
console.log(typeof b); //data type: boolean


var b = b.toString();
console.log(b);
console.log(typeof b); //data type: string 




//method 2  调用String()函数，并将其转换的数据作为参数传递给函数
            // null 和 undefined 可转成"null" "undefined"


var c = 123;
    c = String(c);
                       
console.log(c);         
console.log(typeof c); // 123 string





var d = false; //boolean --> string
    d = String(d);

    console.log(d);
    console.log(typeof d);


var e = null; //null --> string 
    e = String(e);
    console.log(e);
    console.log(typeof e);



    
var uf = undefined; //undefined --> string 
    uf = String(uf);
    console.log(uf);
    console.log(typeof uf);
    