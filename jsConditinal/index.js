/*
date-22/04 
Conditional Statements
  
  - same as java 
  - n Java → condition must be boolean
    In JavaScript → ANY value can be used
      -- false
        0
        ""   (empty string)
        null
        undefined
        NaN

   in java = if (value == true)      
   in js = if (value) 

*/

let age = 18;
let marks = 80;
let attendence = 60;

//  if  
if(age>=18)
{
   console.log("you can vote");  //you can vote
   
}
//if...else
if(marks>=90)
    {
        console.log("pass");  
    }
    else{ console.log("fail"); //fail
    }

    //if...else if...else
if(age>=18)
    {
       if(marks>=80)
       {
        if(attendence>=70)
        {
            console.log("eligible");
            
        }
        else{
            console.log("not eligible");
        }
       }
        
    }    

 // ternary operator 
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);

// important 

let name="";   //Empty name

if (name) {
    console.log("Name exists");
} else {
    console.log("Empty name");
}

// Q1. Even + Divisible Check (Basic + Logic)

let num = 24;

if(num%2==0 && num%4==0)
{
    console.log("even & divisible by 4"); 
}
else if (num%2==0)  
{
console.log("even only"); }
else  console.log("odd");

//Q2. Grade + Edge Case
let mark = 105;

if(mark>100 || mark<0) console.log("invalid marks"); 
else if(mark>=90)  console.log("A+"); 
else if(mark>=75)  console.log("A"); 
else if(mark>=50)  console.log("B"); 
else  console.log("fail"); 

//Q3. Truthy/Falsy Trap

let value = "0";
 let results =(value) ? "Truthy" : "Falsy";
 console.log(results); 

//Q4. Username Validation (Real-world)

let username = "  ";
if(!username.trim()) console.log("Invalid"); //check if text exists
else if(username.length<3)console.log("Too short"); 
else console.log("valid"); 

//Q5. == vs ===

let a = false;
let b = 0;
console.log(a == b);   // true
console.log(a === b);  // false

// switch case 
let day;
switch(new Date().getDay())
{
      case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday"; break;
    default:
        day= "invalid"
}
console.log(day);