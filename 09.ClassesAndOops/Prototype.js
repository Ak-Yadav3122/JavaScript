// let myName = "hitesh     "
// let mychannel = "chai     "
// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`Spidy hero power is ${this.spiderman}`);
    }
}

Object.prototype.golu = function(){
    console.log(`golu is present in all objects`);
}

Array.prototype.heyGolu = function(){
    console.log(`Aichchhik says hello`);
}

// heroPower.golu()
// myHeros.golu()
// myHeros.heyGolu()
// heroPower.heyGolu()

// inheritance

const User = {
    name: "aichchhik",
    email: "golu@google.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS Project',
    fullTime: true,
    __proto__: TeachingSupport  //  __ this means (--)
}

Teacher.__proto__ = User  //this is old syntax

// modern syntax are=> Object.setPrototypeOf(kisme karna hai, kise karna karna hai)
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "JavaScript and Project     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"aichchhik".trueLength()
"AichchhhikKumar".trueLength()
