/*

 In constructor function there is " new " keyword which are 
 used to create multiple instance by using same object. 

 By using new keyword these steps are happened;
 1. the new object are created that is known as instance.
 2. then call constructor function which pack all the argument and give us
 3. packed argument are injected on this keyword
 4. then last they found in function

*/

function User(username, email,logginCount){
/*
this keyword is neccessary beacuse without using this keyword our system 
not understand which is value is variable and which value is argument.
*/
this.username=username;  
this.email = email;
this.logginCount = logginCount
// return this  // not neccessary to write
}
const userOne = new User("aichchhik", "aichchhik12@gmail.com",8)
const usertwo = new User("aichchhik", "aichchhik12@gmail.com",8)
console.log(userOne);
console.log(usertwo);
