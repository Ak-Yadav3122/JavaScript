/* 
  Scope is generally two types one is global scope and another is Block scope. Block scope is used in function , if statement etc.
  It is represented by {}
  Global scope is totally different in the window console and in the node terminal.
  The child block can access the parent block  element but the parent block can not access elements or variables from the child block
 */

//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

// ++++++++++++++++++++++++++++ Example of Scope   ++++++++++++++++++++++

function one(){
    const username = "Aichchhik"

    function two(){
        const website = "Github"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()


// Another Example

if (true) {
    const username = "Aichchhik"
    if (username === "Aichchhik") {
        const website = " Github"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ Interesting Concept of Hosting ++++++++++++++++++


// Hosting is used for a normal function if any variable hold the function then hosting method are not used there.


console.log(addOne(5))
                                                        // This gives output due to hosting 
function addOne(num){
    return num + 1
}



console.log(addTwo(5))
                                                       // This does not give the output because the variable holds the function
const addTwo = function(num){
    return num + 2
}
