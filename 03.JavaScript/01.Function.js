// Method to write the funncton

// Method :- 1

function sayMyName(){
    console.log("A");
    console.log("I");
    console.log("C");
    console.log("H");
    console.log("C");
    console.log("H");
    console.log("H");
    console.log("I");
    console.log("K");
}
// sayMyName()


// Method :- 2 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 5)


// Method :- 3 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addTwoNumbers(number1, number2){

    let result = number1 + number2
    return result
   
}
const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


 // Method :- 4  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 
 function addTwoNumbers(number1, number2){

    return number1 + number2

}
const Result = addTwoNumbers(3, 5)

//  console.log("Result: ", Result);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function loginUserMessage(){
    if(!username){ // ! is used for not and this can also be written as i.e; (username===undefined)
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in` // String interpulation i.e: backstick (` `) and use ${ variable name}to write the variable name
}

loginUserMessage("Aichchhik") // this say only return the value.

// console.log(loginUserMessage("Aichchhik"))  // this say return the value and print the value because we use console.log() that help to print or show the output



function calculateCartPrice(...num1){  // ... these three dot are rest operator and these are used for access the multiple value of array
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))


// Access object byy using function

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
 handleObject(user)



//Another method for access object by using function

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject({
    username: "sam",
    price: 399
})



// Access Array by using function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){   // At the place of getArray we can write anything
    return getArray[1]
}
 console.log(returnSecondValue(myNewArray)); 

// Another method for access Array by using function

function returnSecondValue(getArray){   // At the place of getArray we can write anything
    return getArray[1]
}
console.log(returnSecondValue([200, 400, 500, 1000]));
