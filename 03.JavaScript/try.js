const coding = ["py","java","javascript","c++"]
  const value = coding.forEach( (item) => {   
    // console.log(item);
    // return value                          // we dont write the return for each () are not return the value
    
 });
//  console.log(value);

 const myNum = [1,2,3,4,5,6,7,8]

 // By using foreach()

 myNum.forEach((num) => {
  //  console.log(num +10)
 });

 //By using filter(), In filter() we have to check either true value or false value

 const myArr = myNum.filter((num)=>num >=4)
//  console.log(myArr);

 // By using map()

 const newNum = myNum.map((num)=>num +10)
  // console.log(newNum);