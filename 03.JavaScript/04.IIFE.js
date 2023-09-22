/* Immediately Invoked Function Expressions (IIFE)
   
   Note=> IIfe is used for immediately execution of function and ,
           prevent from any type of pollution or variable that effect the function which come from the global scope.
           So it make its own scope and prevent the function
   
   Once a IIFE are executed it will not stop autometically we have to stop that by using semicolon(;) before making another IIFE  
   There are two type of IIFE , one is named IIFE and another is normal or simple IIFE
   Syntax of IIFE = ()() where first parentheses is used for function definition,
                              second paremtheses is used for execution call

*/

(function hospot(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// IIFE by using arrow function

( () => {
    console.log(`DB CONNECTED TWO`);
} )()



// If our console log expect the variable then

( (name) => {     // taken as an arguments
    console.log(`DB CONNECTED TWO ${name}`);
} )('Aichchhik')  // given execution call as a parameter
