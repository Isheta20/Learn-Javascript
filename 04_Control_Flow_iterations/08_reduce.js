//REDUCE
const myNums = [1, 2, 3]

//also takes callback function
//reduce takes - ACCUMULATOR - an empty variable
// - CURRNETVALUE 

const a = myNums.reduce( function(acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    
    return acc+currval;
}, 0)//0 - initial val given to accumulator as initialization
console.log(a);
//example can be used in shopping cart

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)//same thing 


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

console.log();

const tPrice = shoppingCart.reduce( (total, item) => total+item.price, 0)//initially cart price 0
console.log(tPrice);
