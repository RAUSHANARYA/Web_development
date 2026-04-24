/*
 String 
    - To create a string in JavaScript, you can use single quotes ('), or double quotes (").
    - "Do not do this';  (" ') - error

String Concatenation
- 
    console.log(ram+sita); // not possble - error we have u delace let name = ram , and let she = sita the concat 
    console.log(4+2); // 6 possible

    + operator to concatenate strings
    += add or append to an existing string
    concat() - let result = str1.concat(' ', str2);  
            -  concat() method is beneficial when you need to concatenate multiple strings


slice(start, end)
substring(start, end)
substr(start, length)
substring() is similar to slice().












*/




let name = 'rahul';  // string 
console.log(name);  
let address = " barhi";   // string
console.log(address);


let developer = "Jessica";
console.log(developer);
developer = "Quincy";
console.log(developer);

// string contacation 

//console.log(ram+sita); // not possble - error

console.log(4+2); // 6 possible

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName; 
console.log(fullName); // John Doe

let fullNamee = firstName + lastName; 
console.log(fullNamee);  //johnDoe

// += operator:

let greeting = 'Hello';
greeting += ' John';

console.log(greeting); // "Hello John"

let str1 = 'sv';
let str2 = ' pandi';

let result= str1.concat(str2);
console.log(result); // sv pandi


console.log("Hello! I'm your coding fun fact guide!");

// Variables
let botName, botLocation, favoriteLanguage;

botName = "CodeBot";
botLocation = "the Internet";

// Fixed spacing + typo (and)
console.log("My name is " + botName + " and I live on " + botLocation + ".");

favoriteLanguage = "JavaScript";
console.log("My favorite programming language is " + favoriteLanguage + ".");

// First fact (must be about language, not same sentence)
let codingFact = favoriteLanguage + " was created in just 10 days!";
console.log(codingFact);

// Second fact
codingFact = "I love " + favoriteLanguage + ".";
console.log(codingFact);

// Third fact
codingFact = favoriteLanguage + " can run in browsers and servers.";
console.log(codingFact);

// Final message (fixed syntax + variables used)
console.log("It was fun sharing these facts with you. Goodbye! - " + botName + " from " + botLocation + ".");

console.log(6 / 2);

// let x = "55.56";
// let y = 88;
// console.log(x + y);



let x = 1; 
let y = 2.6;  
let z = "2 + 3i";

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);


let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 12);

let texts = "Hello world, welcome to the universe.";
text.includes("world", 12);