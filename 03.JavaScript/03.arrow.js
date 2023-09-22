const user = {
    username: "Aichchhik",
    price: 1999,

    welcomeMessage: function() {
        
        console.log(`${this.username} , welcome to website`);  // this key word is used to access the value of any variable and the value of
                                                               // this depends on in which context it appears: function, class, or global.
        
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Golu"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Aichchhik"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "Aichchhik"
//     console.log(this.username);
// }

const chai =  () => {                       // Syntax of arrow function are () =>
    let username = "Aichchhik"
    console.log(this);
}


// chai()

//+++++++++++++++++++++++++++++++++++ Method to write Arrow Function +++++++++++++++++++++++++++++++++++

// If we return the value then we have to use the curlybracket{}

const addNum = (num1, num2) => {
    return num1 + num2
}
console.log(addNum(3, 4))

// If we not return the value then we not use curlybracket{} we write it in single line and that is known as 

//Method-1

const addNum2 = (num1, num2) =>  num1 + num2
console.log(addNum2(3, 4))

//Method -2

const addNum3 = (num1, num2) => ( num1 + num2 )
console.log(addNum3(3, 4))

// we can also pass the object in it

const addNum4 = (num1, num2) => ({username: "Aichchhik"})
console.log(addNum4(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
