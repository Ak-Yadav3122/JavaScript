// const tinderUser = new Object()  // This is Singlaton Object 
                                                                  // But the output of both are same.
const tinderUser = {}    // This is not Singlaton Object 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}   // ... these three dot are known as spread operator which help to merge two object to make a single object
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//++++++++++++++++++++++++++++++++ Distructuring of Object +++++++++++++++++++++++++++++++++++

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

//This is another method to access the key and value in object

const {courseInstructor: instructor} = course  // const {the key which we want to access: if we want to change key value then write after (:)} 

// console.log(courseInstructor);
console.log(instructor);    // change the key name by above methog i.e; const {courseInstructor: instructor} 


/*
// Formate of JSON either in object or an array 


// Note=> In json we write key and value both are in Double inverted i.e; " " 

// In object
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}

// In Array
[
    {},
    {},
    {}
]

*/