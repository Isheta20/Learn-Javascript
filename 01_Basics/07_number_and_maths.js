const score = 400;
console.log(score);

//exclusively define datatype
const balance = new Number(100)
console.log(balance);//in browser console it lists the number properties as well

//number functions
console.log(balance.toString().length);//after converting to str can now use string properties
console.log(balance.toFixed(2))//set precision value, places after decimal

console.log("\nPrecision");

const otherNum = 23.896545
//returns string with specified no. of digits
console.log((otherNum.toPrecision(3))); //if digits to be considered till AFTER decimal then roundoff rest
console.log((otherNum.toPrecision(2)));//if TILL decimal then rest round off so decimal gone
console.log(otherNum.toPrecision(1));//BEFORE decimal then rest 10 to the power

console.log("\n");

const hundreds = 1000000
console.log(hundreds.toLocaleString());//by default conversion of date, money acc to locale settings of computer
console.log(hundreds.toLocaleString('en-GB'));//english-british


console.log("\n");//using dot operator to access values within
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

//+++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++
//maths library comes by default in js
console.log("\nMath\n");
// console.log(Math);//get more values in inspect browser
// console.log(Math.abs(-4))
// console.log(Math.round(4.3));//do floor/ceil accordingly
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(3, 4, 5, 20, 2));
// console.log(Math.max(3, 4, 5, 20, 2));

console.log(Math.random())//b/w 0 and 1
console.log((Math.random()*10)+1)//b/w 1 and 10, +1 if u want to avoid 0 
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
//want in given range
//multiply by lenght then add the min value to get above the min value and within range







