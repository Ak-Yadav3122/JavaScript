const name = "Aichchhik"
const repoCount = 50

//this is old method
// console.log(name + repoCount + " Value");

//this is new method 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Aichchhik-ya-com') //another method to make a String

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // use to determine what are the alphabate at that place

console.log(gameName.indexOf('h')); // use to find and print the index of any single alphabate 

const newString = gameName.substring(0, 4)
console.log(newString); // print the number from 0 to 4

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); // print the number from reverse side

const newStringOne = "   Aichchhik    "
console.log(newStringOne); // print the newStringOne
console.log(newStringOne.trim()); // rempove the unwanted gap

const url = "https://google.com/aichchhik%20yadav"

console.log(url.replace('%20', '@')) //replace the position

console.log(url.includes('Kumar')) // serarching kumar in url

console.log(gameName.split('-')); // split the gamename