// We can identify the type of any things with the help of (typeof)
let number = 33
//console.log(typeof (number));


let score = "Aichchhik"
let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

/* conversion output when we change a string in number by using Number()
   "33" => 33
   "33abc" =>Nan {Not a number}
   true =>1
   false =>0
*/

// Conversion  of string and number into Boolean

 let isLoggedIn = 33
 let booleanIsLoggedIn = Boolean(isLoggedIn)
 //console.log(typeof booleanIsLoggedIn);
 //console.log(booleanIsLoggedIn);

  /* Output 
    1 =>true
    0 => false
    " " => false
    "Aichchhik" => true
   */

 // Conversion of nuber and boolean into String

 let someNumber = 33
 let stringNumber = String(someNumber)
 console.log(typeof stringNumber);

 /* Output ( find Type of)
   boolean =>String
   number =>string
 */
