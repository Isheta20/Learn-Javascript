function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

//funcn also somewhere as refers to an object only 
//as js goes up and up the layers until it finds the answer

function createUser(username, score){
    this.username = username
    this.score = score
}

//INJECTING properties to a function
//function is object and objects have properties 
//eg. when we run in browser we see all properties and methods associated with object Array etc
//
createUser.prototype.increment = function(){
    this.score++;//increment the value of who called
}   

createUser.prototype.print = function(){
    console.log(`price is ${this.score}`);
    
}

console.log();

const chai = new createUser("chai", 25)
const tea = new createUser("tea", 250)
chai.print()
chai.increment()
chai.print()
tea.print()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
