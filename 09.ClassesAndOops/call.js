function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    /*
     .call method is used to call the context and when we use the .call we have to 
      pass this as the first parameter and this gives the current context.
      
    */
    SetUsername.call(this, username)   
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);
