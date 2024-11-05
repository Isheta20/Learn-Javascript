// /* STRING */
// let score = "33"

// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score) //'n' capital as object something
// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// /* STRING - ALPHANUMERIC */
// let s = "33abs"
// let valInNumber = Number(s) 
// console.log(typeof valInNumber)//it says converted to number
// console.log(valInNumber)//but the value is not a number

// /*NULL */
// let nullval = null
// let nullInNumber = Number(nullval) 
// console.log(typeof nullInNumber)
// console.log(nullInNumber)//0

// /* UNDIFINED */
// let unval = undefined
// let unInNumber = Number(unval) 
// console.log(typeof unInNumber)
// console.log(unInNumber) //NaN

// /* BOOLEAN */
// let bool = false
// let boolInNumber = Number(bool) 
// console.log(typeof boolInNumber)
// console.log(boolInNumber)//false - 0, true - 1

/*
    commented out everything to avoid lots of outputs
    uncomment the part u want to try
*/



/* to boolean */
// let isLoggedIn = 1
// isLoggedIn = ""
// isLoggedIn = "Isheta"


// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


/* to string */
// let someNum = 20
// let strNum = String(someNum)
// console.log(strNum);
// console.log(typeof strNum);


// *********************** Operations ***********************


// let value = 3
// let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

// let str1 = "namaste"
// let str2 = " stranger"

// let str3 = str1+str2
// console.log(str3);


console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")
//whatever is first gets converted to that
//do use brackest in operations to make things clear

//converts to number but bad code don't do it
console.log(+true)
console.log(+"")

//less readability could be better
let num1, num2, num3
num1 = num2 = num3 = 2+2

//pre post increment decrement

//logical operations
// console.log(2 > 1);
// console.log(2 <= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


//make sure which datatype to get predictable result 
console.log("\n");
console.log("2" > 1);
console.log("02" > 1);

console.log("\n");

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);//comparison converts null to a number, treating it as 0 that's why true for 3rd while null>0 false and in == null directly compared with 0

console.log("\n");
console.log(undefined == 0);
console.log(undefined <= 0);
console.log(undefined < 0);

/* 
    try to avoid such comparisons as less predictability
    comparison and equality chk work differently 
*/

// strict chk

console.log("2" === 2); //will not convert, will say datatype different





