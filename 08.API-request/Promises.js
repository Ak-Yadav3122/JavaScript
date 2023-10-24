/*
Promises are used for:-
Do an asyns task
DB calls, cryptography, network, etc.
*/

//  First method to create the promises

const createPromises = new Promise(function(resolve,reject){
setTimeout(function(){
    console.log("Async task 1");
    resolve() // this is method that are used to connect the (resolve and .then)
},2000)
})
createPromises.then(function(){
    console.log("Async 1 resolve");
})

//  Second method to create the pomises

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 is resolved");
})

//  Third method to create the pomises

const thirdPromises = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({
            username:"Aichchhik",
            email:"aichchhikyadav@gmail.com"})

    },1000)
})
thirdPromises.then(function(user){ // at place of user we write anything for store the object data that come from above.
    console.log(user);
})

// resolve() this return the value and connect with .then to show the result
// reject() this return the value and connect with .catch to show the result

//  fourth method to create the pomises

const fourthPromises = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({
        username: "Aichchhik",
        email: "aichchhikyadav@gmail.com",
      });
    } else {
      reject("ERROR : HAPPENED");
    }
  }, 1000);
});

fourthPromises.then(function (user) { // at place of user we write anything for store the object data that come from above.
  console.log(user);
  return user.username
}).then(function(username){
console.log(username);
}).catch(function (error) {
  console.log(error);
}).finally(function(){ // .finally() always run.
    console.log("Promise are either resolved or rejected");
})

/*
NOTE=> we can use .then() more than one time and every time the return value came from above .then(),
This is called chaning of .then()
EXP: In second .then() the the value of usename came from first .theen()
*/


//  fifth method and we create the pomises by using async awite method

const fifthPromises = new Promise(function (resolve, reject) {
    setTimeout(function () {
      let error = true;
      if (!error) {
        resolve({
          username: "GOLU",
          email: "goluyadav@gmail.com",
        });
      } else {
        reject("ERROR : JS ERROR HAPPENED");
      }
    }, 1000);
  });

  async function handlefifthPromises(){
    
    try {
        const response = await fifthPromises
        console.log(response);
    } catch (error) {
        console.log((error));
    }
    
  }
  handlefifthPromises()

//  By using fetch() we get the data from network

  fetch("https://api.github.com/users/Ak-Yadav3122")
  .then(function(response){
  return response.json()
  })
  .then(function(data){
console.log(data);
  }).catch(function(error){
    console.log("Happing:"(error));
  })