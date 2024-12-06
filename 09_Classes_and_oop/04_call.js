function SetUsername(username){
    //complex DB calls 
    this.username = username;
    console.log("called");
    
}

function createUser(username, email, password){
    // SetUsername(username)//This is called, execution context n everything, then popped frm stack, variables inside it gone

    this.email = email
    this.password = password

    //TO HOLD THE VALUES/REF OF THE VALUES RETURNED before they gone
    SetUsername.call(this, username)//take my current context and change make changes in it directly
}

const chai = new createUser("chai", "chai@fb.com", 1234)
console.log(chai);
