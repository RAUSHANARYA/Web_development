// let a = 5 ;
// console.log(a);
// console.log(b);

// let b  =7;
// console.log(a);
// console.log(b);

// let test = " global variable "

// function classA()
// {
//   console.log("class A" , test);
  
// }
// function classB()
// {
//      console.log("class B" , test);
// }
// function classC()
// {
//     let test2 = " local variable "
//      console.log("class C" , test);
// }
// function classD()
// {
//      console.log("class D" , test);
// }
// function classE()
// {
//      console.log("E" , test);
// }
// function classF()
// {
//      console.log("class F" , test);
// }
// function classG()
// {
//      console.log("G" , test);
// }

// classA();
// classB();
// classC();
// classD();
// classE();
// classF();
// classG();


// alway declare all varible in top 
let a;
let b ;
let c ;

 a= 10;
console.log(a); // 10
console.log(b); // undefined 
console.log(c); // undefined

 b = 20;

 console.log(a); // 10
console.log(b); // 20 
console.log(c);  // undefind 

 c = 20;

 console.log(a);
console.log(b);
console.log(c);

// Hoisting with Function Declarations
// Function declarations are fully hoisted

greet();

function greet() {
console.log("Hello");
}

// Only variable declaration is hoisted, not function assignment

sayHello(); // Error

var sayHello = function () {
console.log("Hi");
};