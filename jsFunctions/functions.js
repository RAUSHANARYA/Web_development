/*





*/



console.log("functions");

// 2. Function Declaration
function greet() {
    console.log("Hello");
}
greet(); // call

// 3. Function Parameters

function sum(a,b) {
    
    console.log(a+b);   
}
sum(2,3);  // caal the funtions 

function sub(a,b) {
    return a-b;
    
} console.log(sub(4,2));  

// Function Arguments

function shows() {
    console.log(arguments);  // use as void in java -- 1,2,2,3,4 
    
}
shows(1,2,2,3,4); 

let add = (a, b) => {
    return a + b;
};
console.log(add()); // nan => use in Modern JS

// Hoisting
greet();

function greet() {  // only function declaration 
    console.log("Hello");
}