const coding = ["js", "ruby", "java", "cpp", "python"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item;
})
console.log();

console.log(values);//no value returned by for each
console.log();


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//takes a callbackfuncn
const newNums = myNums.filter( (num) => num > 4)
//this op can be done in forEach also but forEach does not return the values filter does return it

// const newNums = myNums.filter( (num) => { 
//     return num > 4//explicit return as opened a scope
// })

console.log(newNums);
//same in forEach
console.log();

const arr = []
myNums.forEach( (num) => {
    if(num>4) arr.push(num);
})

console.log(arr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === "History")
userBooks = books.filter( (bk) => bk.publish >= 1995 && bk.genre == "History")

console.log(userBooks)