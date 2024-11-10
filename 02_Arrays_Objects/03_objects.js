//singleton - one of it's own kind, created with constructor
// A singleton object is a design pattern that ensures a class only has a single instance throughout your application. This single instance, also known as the singleton, serves as the central point of access to any data or methods associated with the class. // will be discussed later


//object literals - way to declare objects

//object has keys and values unlike array where you can't define keys

// Object.create()//in this only singleton created

const mySym = Symbol("key1")//interview - declare symbol, use it as key in the ojbect and print

const User = {
    name: "Isheta",
    "full name": "Isheta Aggarwal",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "isheta@microsoft.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

console.log(User.email)
console.log(User["email"])//use the quotes because it is taking a string value 

console.log(User["full name"]);//cannot access this with dot

// mySym: "mykey1", // if symobl added to object like this then not valid syntax, it will be added as normal key not as symbol
// console.log(User.mySym)
// console.log(User)

// it has syntax of adding key using [], for accessing also only [] to be used
console.log(User[mySym])

User.email = "isheta@abc.com";
console.log(User.email);

// Object.freeze(User) //lock object values, can no longer be modified
// User.email = "abs.esf.com"
// console.log(User);//here see symbol

console.log("\n");

User.greeting = function(){
    console.log(("Hello Js User"));
}

console.log(User.greeting);//does not run funcn just returns ref to funcn
User.greeting()
console.log(User.greeting());//this gives UNDEFINED as  
//using console.log(console.log()) thing thats why undefined coming, just like python when you do print(print("Hi")), it gives hi then none. print statement inside print statement.

User.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);//this used to refernce CURRENT OBJECT
}
User.greetingTwo();






