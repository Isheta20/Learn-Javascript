//Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString()); //gives more readable format
// many similar funcitons
console.log(myDate.toDateString());
console.log(myDate.toISOString());

console.log(typeof myDate); //date is an object

console.log("\n");
//declaring dates
let myCreatedDate = new Date(2024, 0, 20); //months start from 0 in js
console.log(myCreatedDate.toDateString());
let myCreatedDate2 = new Date(2024, 0, 20, 7, 3);
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2024-06-25"); //in yy/mm/dd - month starts with 1
console.log(myCreatedDate3.toLocaleString());
let myCreatedDate4 = new Date("01-23-2024"); //in mm/dd/yy - month starts with 1
console.log(myCreatedDate4.toLocaleString());

//Time //for eg used in polls who replied faster reward
console.log("\nTime\n");
let myTimeStamp = Date.now();
console.log(myTimeStamp); //returns in milliseconds, from 1st jan, 1970 till now
console.log(myCreatedDate.getTime()); //time from 1st jan till the created date

//then you can easily compare the two

console.log("\n");

console.log(Math.floor(Date.now() / 1000)); //divide by 1000 to convert to seconds, to avoid decimal floor used

console.log("\n");
let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// string interpolation - `${newDate.getDay()} and the time is ... `

console.log("\n");
console.log(newDate.toLocaleString("default", { 
    weekday: "long", 
    
})); //customizing the format
