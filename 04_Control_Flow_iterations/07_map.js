const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//In map can perform operations to modify the array returns a new array
//filter returns what is true

const newNums = myNumers.map( (num) => num + 10)
// const newNums = myNumers.map( (num) => { return num + 10})//opening scope so return
console.log(newNums);

//can be done using forEach

//CHAINING
const a = myNumers
            .map( (num) => num * 10 )//this result passed to next map
            .map( (num) => num+1 )
            .filter( (num) => num >= 40)

console.log(a);


