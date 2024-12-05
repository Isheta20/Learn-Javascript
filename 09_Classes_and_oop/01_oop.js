//object literal - An object literal in JavaScript is a simple and concise way to create objects using curly braces {}. It allows you to define key-value pairs directly.
const user = {
    username: "Isheta",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        
        console.log(this);
        
    }
}
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);//global context different for browser and node and others


//THIS refers to current context

//****** CONSTRUCTOR FUNCTION *********

//helps create new context
// const promiseOne = new Promise()
// const date = new Date()
//NEW - constructor function helps to create new object
//ALWAYS GIVES A NEW INSTANCE


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this;//returns object //even without returning returned implicitly
}

// const userOne = User("Meow", 12, true)
// const userTwo = User("Hello", 45, false)
// console.log(userOne);//values of userOne gets overwritten

// so use the new keyword it gives SEPARATE COPY
const userOne = new User("Meow", 12, true)
const userTwo = new User("Hello", 45, false)
console.log(userOne.constructor);//a reference to itself i.e. function User
console.log(userTwo);

// NEW KEYWORD
/*
- Empty object created first
- constructor function is called and the arguments are packed and sent to this keyword, i.e. you get the arguments
*/

//**instance of method do read**

