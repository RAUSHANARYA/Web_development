// /*



// */

// for(let i =19;i<200;i=i+19)
// {
//     if(i==57||i==114) continue;
//     console.log(i); 
// }

// // while 
//   console.log("\n while \n \n"); 

// let j = 50;
// while(j>=0)
// {
//     if(j==44) break;
//     console.log(j);
//     j=j-2; 
// } 

// //Q1. Sum of First N Numbers

// for(let n =5 ; n<=15;n++)
// {
//     console.log(n);
    
// }

// //Q2. Reverse a Number
// let x = 1234;

// function revs(x, rev = 0) {
//   if (x === 0) return rev;

//   let digit = x % 10;
//   x = Math.floor(x / 10);
//   rev = rev * 10 + digit;

//   return revs(x, rev);
// }

// console.log(revs(x));

// // Q3. Count Even Numbers
// let n = 0;
// let count =0;
//  while(n<=10)
//  {
//     if(n==0)
//  { n++; 
//     continue;
// }
//     if(n%2==0) count++;
//     n++;
//  }
//  console.log(count);
 
// // Q4. Right Triangle Pattern
// let row =5;
//   for(let k =0;k<row;k++)
// {
//     let str=""
//     for(let l =0;l<=k;l++)
//     {
//        str+="* ";
          
//     } 
//   console.log(str);  
    
// }
let table = 2;
for(let t =1;t<=10;t++)
{
  console.log(t*table);
  
}
let m =1;
while(m<=10)
{
  console.log(m*table);
  m++;
  
}

let n =1;
do {
  
  console.log(n*table);
  n++;
} while (n<=10);

// let a = [2,3,4,5,6,7,8,9,10,12];
// for(let l =0;l<a.length;l++)
// {
//   console.log(a[l]);
  
// }