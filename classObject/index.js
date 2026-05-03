/*

 # use for private 
 private only use inside class , use by this class 

 so we use getter n setter 
 getter - use to fetch the value -- use get 
 settter - use to update or set the value -- set

*/
class human {
  // properties
  age ;
  #wt = 50;  // private only use inside class , use by this class 
  height = 180;

  constructor(newAge , newHt)
  {
    this.age = newAge;
    this.height= newHt;
  }

  // behavoirs
  walking() {
    console.log("i am walking" , this.#wt);
  }
  running() {
    console.log(" i am running ");
  }

  // get n set 

  get fetchWt()
  {
    return this.#wt;
  }
  set modifyWt(val)
  {
    this.#wt=val;
  }
}

let obj = new human(50,160);

console.log(obj.age);
console.log(obj.height);
obj.walking();
obj.running();

const person = {
  firstName: "John",
  lastName: "Doe"
};

let result = ("firstName" in person);

//NESTED OBJECTS

// obj  inside object.
let student = {
    name: "Rahul",
    
    marks: {
        maths: 90,
        physics: 85
    }
};

console.log(student.marks.maths); // 90