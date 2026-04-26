/*
topc - Array = date 25/04

 Java → same type only
 JS → mixed types allowed like ( num ,string , char all in one arr )

        - in java = int[] arr = {1,2,3};
        - in js =let arr = [1, 2, 3];

methods 
push - push(x)  -add at end -  arr.push(40)
pop - pop() - remove last - arr.pop();
unshift(x) → add at start - arr.unshift(5);
shift() → remove first - arr.shift();
--------------------
// for each 

 arr_name.(function_name(any variable that print or trverse , aaray , index , i )
 {
 //code 
   console.log(-print );
});

** forEach cannot use break/continue ❗

------------------
map() - Creates new array

*/




console.log("array");

let arr = [1, 2, 3];

let arr1 = [1, "hello", true];  //(3 length) [1, 'hello', true]

arr1.push(40);  // add 40 at last
console.log(arr1);

arr1.pop(); // remove last element 
console.log(arr1);

arr1.unshift('sv' ) ; // add at first
console.log(arr1);

arr1.shift() ; // remove first
console.log(arr1);

//loop 
let arr2 = [10, 20, 30];

for (let i = 0; i < arr.length; i++) {
    console.log(arr2[i]);
}

// for each 

arr.forEach(function(val)
{
    console.log(val);
});

arr2.forEach(function(i)
{
   console.log(i);
});
arr3.forEach(function(i)
{
   console.log(i);
});
console.log("java");
