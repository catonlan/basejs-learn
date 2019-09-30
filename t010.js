// javascript

/*switch 语句--------------------------------*/



/*
switch(条件表达式)
{case 表达式：
       语句
       break;
 case 表达式：
       语句
       break;
 case 表达式：
       语句
       break;
 default:
       语句...
       break;
  }


switch....case...
case后的表达式会依次和switch后的表达式进行全等比较
ture--> 执行当前case后的语句，用break停止（不然后面都会执行）
false--> 继续向下-->都不行，执行default后的语句


*/


// if

var num = 1;
if (num == 1) {
    console.log("one");
}else if (num ==2) {console.log("two");
}else if (num ==3){console.log("three");
}else{console.log("bubu,not number");
}


// switch

var num1 = 2;

switch(num1) {
    case 1:
        console.log("one-");
        break;

    case 2: 

        console.log("two");
        break;


    case 3:
        console.log("three");
        break;
        
    default:
        console.log("bubu not num");
        break;
        
}


// 练习1

var score = +prompt("enter you score");

switch(parseInt(score/10)){
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    console.log("pass");
    break;

    default:
        console.log("faile");
        break;
            
}



// 练习2


var week = +prompt("enter 1-5")
switch(week) {


    case 1:

    console.log("monday");
    break;


    case 2:
    console.log("tusday");
    break;


    case 3:
        console.log("wednesday")
    break;


    case 4: 
    console.log("thursday");
    break;

    case 5:
        console.log("friday");
        break;


        
    default:
        console.log("bubu not num");
        break;
    
    
}