const user = {
    username:"Aichchhik",
    Email:"aichchhik12@gmail.com",
    logginCount:5,
    getuserdetail:function(){
        // console.log("got detail");
        // console.log(`username: ${this.username}`);
        console.log(this);
    }
}
// console.log(user)
console.log(user.username);
console.log(user.getuserdetail());