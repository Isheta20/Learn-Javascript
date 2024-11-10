/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive / reference Datatypes
       Arrays  =>  object
       Function  =>  function /object function
       Object  =>  object
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const id2 = Symbol('123')
//even if value same symbol not same
console.log(id === id2)

const bigNum = 8529749875493758n//n becomes bigint


//non-primitive/reference

const fruits = ["apple", "grapes", "cherry"];

let obj = {
    name: "isheta",
    age: 22,
}

function f(){

}

//can assign funciton to variable
const fun = function(){
    console.log("Hello world");
}

console.log(typeof myfi); //a variable that doesn't exit type - undefined

console.log(typeof fun) //funciton/  object function
console.log(typeof fruits)
console.log(typeof obj)