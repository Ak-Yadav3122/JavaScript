/* 
    There are two types of DataType i.e;
    1.Primitive DataType 
    There are 7 type of primitive datatype i.e;
    number,boolean,string,symbol,bigInt,null,undefined

    2.Non-primitive Data type OR reference type
    There are 3 type of non-primitive datatype
    array[] , object{} , function
*/

// +++++++++++++++++++++++++++++++++++ MEMORY ALLOCATION +++++++++++++++++++++++++++++++++++++++++

/* There are two type  of memory that are used inn java script

    1.Heap = Used in non-primitive datatype (call by reference)
        => In Heap if we chance the value then original value are also change because when we take the reference of 
        non-primitive datatype then original value are pass and if we perform any chhange then 
        original value are also change
*/
let userOne = {
  email: "aichchik123@gmail.com",
  userId: 243435342,
};
let userTwo = userOne;
userTwo.userId = 56876978;  //we can access any data on object  by the help of {.data which we want to access}
console.log(userTwo);
console.log(userOne);

/*
    2.Stack = used in primitive datatype(call by value)
   => In Stack memory if we change the value then original value are not change because in
      stack we only have the copy of value.

 */

let myName = "Golu Yadav";
let anotherName = myName;
anotherName = "Aichchhik Yadav";
//console.log(myName);
//console.log(anotherName);
