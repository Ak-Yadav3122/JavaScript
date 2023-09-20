/* 
  It is represented by {}
  Global scope are totally difference in window console and in node terminal.
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


// ++++++++++++++++++ Interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}