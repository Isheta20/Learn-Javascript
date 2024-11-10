const user = {
    username: "meoww",
    price: 999,
    
    welcomeMessage: function(){
        console.log(`${user.username}, welcome to website`);
    }
}
//this - refers to the current context

user.welcomeMessage();
user.username = "Bai";
user.welcomeMessage();

console.log(this);//current context is empty
/*we are in node environment and it refers to empty object
in Browser - this refers to window

js excecuted on an engine in browser in earlier time
brought the browser out, gave it different names eg. node

In browser the global object is the window object */

console.log("\n");
function chai(){
    let username = "Isheta";
    console.log(this);
    console.log(this.username);//can only be used in objects
}
chai();

//Arrow Function

const cakeRusk = () => {

    let username = "Isheta";
    console.log((this.username));//does not work here also
}
cakeRusk()

console.log("\n");

const addTwo = (num1, num2) => {
    return num1+num2;
}

//IMPLICIT RETURN - implicit matlab mein maan leta hoon apko return likhne ki zaroorat nhi hai
const subTwo = (num1, num2) => num1-num2;


//with curly braces will have to write return keyword
console.log(addTwo(3,6));
console.log(subTwo(3,6));

//PARANTHESIS - helps to return object without it undefined
// const paras = () => {username: "Isheta"}; //undefined
const paras = () => ({username: "Isheta"}); 
console.log(paras());


//functions are used a lot in looping through array will do in future
