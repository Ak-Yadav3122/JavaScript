const marvel_Heros = ["thor", "Ironman", "spiderman"]
const dc_Heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_Heros, ...dc_Heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Aichchhik"))
console.log(Array.from("Aichchhik"))

console.log(Array.from({name: "Aichchhik"})) // interesting because .from can not directy convert object into
// array it gives a empaty space we should tell us which secction we want to covert either key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));