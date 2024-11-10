// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// {} - SCOPE

var c = 300;

if(true){

    let a = 10
    const b = 20
    var d = 40
    var c = 30
    //c = 30 same thing as var c
}

// console.log(a);//this will give error as a lifetime only till if block
// console.log(b); //error for same reason

console.log(d); // can be accessed outside the scope as well

console.log(c);
//variable with same name declared in different scope but since var so the value overwrites in the prev variable
//troublesome when multiple programmers and code is being imported

//inside if - block scope - global scope can be accessed here but inside stuff doesn't go outside
//outside - global scope

console.log("\n");

let a = 300;
if(true){
    let a = 40
    console.log("INNER", a);
    
}
console.log(a);

//here if i declared without let then raita in global scope also
// for(let i=0; i<Array.length; i++){
//     const el = array[i];
// }

console.log("\n");

function one(){
    
    const username = "meow"
    
    function two(){
        const website = "youtube"
        console.log((username));
    }
    // console.log(website); //will give error as scope ended
    
    two();//two has to be called to run
}

//nested function - child can access parent variables
//chotte bache badhe se ice cream le theek hain, badhe chote se lein not good
one()

console.log("\n");

if(true){
    const username = "bing "
    if(username == "bing "){
        const website = "yt"
        console.log(username+website);
    }
    // console.log(website); //will give error as scope ended
    
}
// console.log(username);//will give error as scope ended

//++++++++++++++++++++++++something++++++++++++++++++++++++

console.log(addone(6));//this will not give any error

function addone(num){
    return num+1
}
addone(5)

// addTwo(6)//cannot access before declaration
const addTwo = function(num){//this is an expression, it is like a variable
    return num+2;
}
addTwo(5);