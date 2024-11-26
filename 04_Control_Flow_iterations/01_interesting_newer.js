if(true) console.log("Hello"); // Implicit Scope no need for {} this one line is understood to be in if scope

//FALSY values
// false, 0, -0, BigInt 0n, empty string, null, undefined, NaN

//TRUTHY values
// true, 1, "0", 'false', " "(string with space) - basically anything in string, [], {}, function(){} 

//to check if array empty or not
const a = []
if(a.length === 0) console.log("Array is empty");

const emptyobj = {};
if(Object.keys(emptyobj).length === 0) console.log("Object is empty");

//INTERVIEW
console.log(false == 0);
console.log(false == '');
console.log(0 == '');

console.log("\n");

//NULLISH COALESCING operator (??): null defined

//when null or undefined value it chooses the other value otherwise the first value chosen

let val1;
val1 = 5??10;
val1 = null ?? 10; // in case of DB fetching instead of 10 there is a function to further handle and fetch the value if need be

//fallback for errors

val1 = undefined ?? 15

val1 = null ?? 10 ?? 20

console.log(val1);

// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

//ternary operator is different


