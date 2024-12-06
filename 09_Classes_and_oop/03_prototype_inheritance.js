// let myName = "isheta    "

// console.log(myName.length);
//I want only the length of the my name n want to do it lots of time so make a function or add functionality to the function // solved at end

let animals = ['turtle', 'rabbit']

let animalAbt = {
    turtle: "slow",
    rabbit: "fast",

    getRabbit: function(){
        console.log(`Rabbit: ${this.rabbit}`);
        
    }
}//obj created but I want another function with my name


Object.prototype.isheta = function(){ // OBJECT  is a factory funcn -_- //basically injecting isheta funcn to all objects
    console.log("Isheta is present in all objects");   
}

animalAbt.isheta()
animals.isheta() //since everything technically goes through object so array should also have this function

//ACCESSED the top level hierarchy OBJECT whose properties inherited by all


//giving the injection to array to see if others like function, strings get it or not

Array.prototype.hloIsheta = function(){
    console.log(`Isheta says hello. Did everyone get the access to this method through array? Guess not`);
    
}
// animalAbt.hloIsheta() //will give error did not get the function


//INHERITANCE


//OLD SYNTAX FOR inheritance - __proto__
const User = {
    name: "chai",
    email: "chai_20@gmail.com",
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

//MODERN SYNTAX

Object.setPrototypeOf(TeachingSupport, Teacher); 


//Solved
let myName = "isheta    "
console.log();

console.log(myName.length);
console.log();

String.prototype.trueLen = function(){
    console.log(`${this}`); //jisne call kiya vhi reference hai
    console.log(`True length is: ${this.trim().length}`);
    
}

myName.trueLen();
"Meowww".trueLen()
"glock".trueLen()