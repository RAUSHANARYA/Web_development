/*
 this is [] bracket notation ==console.log(fData[1]["name"]);
 2nd - .notation - work only with jSON ====console.log(fData[1].name);

JSON - javascript object notation 


*/

// [] bracket

let fd = [
  ["rv", "18-11-2000", 71254],
  ["rv", "18-11-2000", 71254],
  ["rv", "18-11-2000", 71254],
];

fd.forEach((element) => {
  console.log(element);
});

// use json data to make similier for more readable
let fData = [
  {
    name: "Rahul Verma",
    dob: "18-11-2000",
    city: "Bhopal",
    phone: 9876543210,
    profession: "Software Engineer",
    age: 24,
  },
  {
    name: "Aman Sharma",
    dob: "05-03-1999",
    city: "Delhi",
    phone: 9123456780,
    profession: "Graphic Designer",
    age: 26,
  },
  {
    name: "Priya Singh",
    dob: "22-07-2001",
    city: "Indore",
    phone: 9988776655,
    profession: "Teacher",
    age: 23,
  },
];

fData.forEach((element) => {
  console.log(element["name"]); // only phone no , use element for all data
});

console.log(fData);

console.log(fData[1]["name"]); // bracket notation
console.log(fData[1].name); // dot notation

//NESTED OBJECTS

// obj  inside object.
let student = {
  name: "Rahul",

  marks: {
    maths: 90,
    physics: 85,
  },
};

console.log(student.marks.maths); // 90


let data = [
   {
    name: "Rahul Verma",
    dob: "18-11-2000",
    city: "Bhopal",
    phone: 9876543210,
    profession: "Software Engineer",
    age: 24,
  }

];

console.log(Object.keys(data));
console.log(Object.values(data));

