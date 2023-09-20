const marvel_Heros = ["thor", "Ironman", "spiderman"]
const dc_Heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //by this method we find the output but not in systematic ways. Our output are ["thor", "Ironman", "spiderman" ["superman", "flash", "batman"]]

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //if we use the above method to join the Marvel heroes and DC heroes then we access any element by this method

// const allHeros = marvel_heros.concat(dc_heros) // By this method i.e; .concat() we find the output= ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]
// console.log(allHeros);

const all_new_heros = [...marvel_Heros, ...dc_Heros] // this is another method to add one array into another

// console.log(all_new_heros);


//If we have this type of array then we use .flat(Infinity) to remove  all the array inside the array and make a single array.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) 
console.log(real_another_array);



console.log(Array.isArray("Aichchhik")) // .isArray( any question) method is used to ask questions and output is either true or false
console.log(Array.from("Aichchhik"))  // .from() method is used to make the string or other things into an array

console.log(Array.from({name: "Aichchhik"})) /* interesting because .from can not directly convert object into
                                                array it gives an empty space we should tell us which section we want to covert either key or value */

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // {Array.of()} it is used to make the single array of all values.
