 /*
   Object are the collection of keys and values within the {} brackets.

   There are two types of initialization or making of object i.e; object literals and object Constructor

   Jab object constructor se banega tab singleton banega and jab object literals
   ke help se banega tab singleton nahi banega.
   
   Singleton means ye apne tarah ka ek he object hai.
   
   */

// this is object constructor
// Object.create()

//this is object literals
const mySymb = Symbol("key1")  // Declarationn of symbol by using Symbol("jiska symbol banana hai use likhenge")

const user = {
    name: "Aichchhik", // we can also write name = "name".Both are same
    "full name": "Aichchhik",
    [mySymb]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "aichchcik@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// There are two ways to access the the key of obejct i.e;
// (.write which key we want) method and ["write which key we want"] method.

// console.log(user.email)
// console.log(user["email"])
// console.log(user["full name"])
// console.log(user[mySymb])

user.email = "golu12@gmail.com"

// Object.freeze(User) // Object.freeze(which we want to freeze) , this method is used to freeze the object.After performing this operation any one can not change the keys value.

user.email = "Aichchhikyadav@gmail.com"
// console.log(User);

user.greeting = function(){
    console.log("Hello JS user");
}
user.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(user.greeting());
console.log(user.greetingTwo());


/* IMPORTANT TO Know...

 Q: How to use symbol as a key in object.
 Ans: we use [] and write our variable which we want to use.

 Ex:- const mySymb = Symbol("key1")  
      const user{
        [mySymb]: "mykey1"
      }
      console.log(user[mySymb])
     
   Note=> If we not use [] then our output is same as when we use the [] but our 
          data type are changed.
          when we write  mySymb:"mykey1"  then mySymb is treated as string   
          when we write  [mySymb]:"mykey1"  then mySymb is treated as Symbol   


*/ 
