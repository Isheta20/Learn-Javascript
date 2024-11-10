//array
//has one property - length two prototypes - see in browser console
const myArr = [9, 3, 43, 5, 3, 5]
console.log(myArr[0]);

const animals = new Array("dog", "cat")
console.log(animals[1])

//Array methods

// myArr.push(6)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(100)//shifts all elements to right to insert new el in beginning, so, very time consuming but if necessary then use
// console.log(myArr);

// myArr.shift()//removes first element
// console.log(myArr);

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(2))//-1 when value does not exist

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);//all values added to a str basically string converted

//slice, splice

console.log("\nA", myArr)//original arr
const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B", myArr)//arr after slice

const myn2 = myArr.splice(1,3)
console.log("C", myArr)//arr after splice
console.log(myn2)

/*in SLICE - last idx not included in range
 - does not modify the original array
 SPLICE - last idx included in range
 - modifies the original array, that range is removed
 */