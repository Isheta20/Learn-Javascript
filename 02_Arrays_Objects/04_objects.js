const instaUser = new Object() // this is a singleton ojbect
// or const instaUser = {}

console.log(instaUser);
instaUser.id = "123abc"
instaUser.name = "Nancy"
instaUser.isLoggedIn = false

console.log(instaUser);

const regularUser = {
    email: "drew@gamil.com",
    fullname: {
        userfullname: {//object nesting
            firstname: "Nancy",
            lastname: "Drew"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);

//If fullname doesn't exist then
//OPTIONAL CHAINING
// console.log(regularUser.fullname?.userfullname.firstname);

//? - adds protection, if value there then do this, o/w will hv to use if else //usefull in APIs
console.log("\n")
const obj1 = {
    1: "a",
    2: "b",
}
const obj2 = {
    3: "a",
    4: "b",
}

const obj3 = {obj1, obj2};//will add object in obj basically whole obj added at last as element
console.log(obj3);

const obj4 = Object.assign(obj1, obj2)
// const obj4 = Object.assign({},obj1, obj2) //can create an empty object to copy values of all objects to that empty object
console.log(obj4);

const combined = {...obj1, ...obj2};
console.log(combined);

//If array has multiple objects then how to access
// const users = [
//     {

//     },
//     {

//     },
//     {

//     }
// ]
// users[1].email;

console.log("\n");
console.log(instaUser);
console.log(Object.keys(instaUser)); // get all keys 
//keys returned in datatype - ARRAY 
//now u can loop through them easily
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('isLoggedIn'));//to chk if it has that property


