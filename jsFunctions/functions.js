/*
topc - funtion = date 25/04




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

// Q1. Factorial Function
function factorial(n)
{
  if(n==1) return 1;
    return n*factorial(n-1);
}
let ans = factorial(5);
console.log(ans);

// Q2. Reverse Number
   
function reverseNum(num)
{
     let rev = 0;

    while(num > 0)
    {
        let digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10);
    }

    return rev;

}
let anss = reverseNum(1234);
console.log(anss);

//Q3. Palindrome Number

function palindrome (n)
{
    let arr = n.toString().split("").map(Number);
    let left =0;
    let right = arr.length-1;
    while(left<right)
    {
         if(arr[left] != arr[right])
         {
          console.log("Not palindrome");
          return ;
         }
        left++;
        right--;
    }
     console.log("palindrome");
}
let n = 2321;
palindrome(n);