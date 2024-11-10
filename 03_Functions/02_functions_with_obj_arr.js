function calculateCartPrice(...num1){//rest operator - pack in bundle 
    return num1;
}
//rest operator same as spread just depends on use case
console.log(calculateCartPrice(200));
console.log(calculateCartPrice(200, 400, 500));

function calCartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calCartPrice(200, 400, 500, 2000));


//fucntion with object as parameter
const user = {
    username: "isheta",
    totalCartValue: 356
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.totalCartValue}`); 
    // console.log("\n");
    
    //have to chk typesafety to chk if the value accessing is correct or not 
    //typescript mein it's done but in js hv to use if else
    console.log(`Username is ${anyobject.username} and price is ${anyobject.totalCartVal}`); 
}

console.log("\n");
handleObject(user)
handleObject({
    username: "sam",
    totalCartVal:399
})

//fucntion with array as parameter

console.log("\n");
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(arr){
    return arr[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1, 45, 56, 78]));
