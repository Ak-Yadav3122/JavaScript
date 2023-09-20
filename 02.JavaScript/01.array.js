// Array

//method one to write the array
const myArr = [0, 1, 2, 3, 4, 5]

//second method to write the array with the help of new keyword
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]); // output = 2

// Array methods

// myArr.push(6)  // Push the 6 into the array.
// myArr.push(7)
// myArr.pop() // pop the element from an array and in the pop method we can not pass any value it removes the last element of the array automatically.

//  myArr.unshift(9) 
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// +++++++++++++++++++ Use and difference between slice and splice +++++++++++++++

                                            // Differences are Bellow

console.log("A ", myArr);                 

const myn1 = myArr.slice(1, 3)  // Slice can not manipulate or change the original Arrays.
                                // original array after performing splice method = [0,1,2,3,4,5]

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  // Splice can manipulate or change the original Arrays.
                                 // original array after performing splice method = [0,4,5]

console.log("C ", myArr);
console.log(myn2);
