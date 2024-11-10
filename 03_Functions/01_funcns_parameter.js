//fucniton declaration name
function sayMyName(){//{} - function scope
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("T");
    console.log("A");
    
}

sayMyName;//reference - function lies here
sayMyName()//function execution

console.log("\n");

function addTwoNumbers(number1, number2){//parameters - values recieved
    
    console.log(number1 + number2);
}
addTwoNumbers(3, 4) // arguments - values sent when funcn called
addTwoNumbers(3, "5")
addTwoNumbers(3, "a")
addTwoNumbers(3, null)
//we will later learn d chking part

//since no value returned so ans undefined
// const result = addTwoNumbers(5, 6)
// console.log("Result: ",result);


function mulTwoNumbers(number1, number2){

    let result = number1*number2;
    console.log("Espresso");
    return result;
    //or directly - return number1+number2
    console.log("This line will not run as after result");
    
}

const product = mulTwoNumbers(4, 7);
console.log(product);

function loginUserMessage(username){

    //undefined or empty string is assumed to be a false value so
    //instead of username === undefined can use this 
    if(!username){//undefined - false - !false = true - enter if
        console.log(
            "Please enter a username"
        );
        return
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Meow"))
// console.log(loginUserMessage())//no value passed then undefined to tackle we chk is nothing sent

console.log(loginUserMessage());//later undefined bec. we printing the undefined returned in if statement


function rewardMessage(reward = "sword"){
    return `A ${reward} has beeen rewarded`;
}
console.log(rewardMessage("fish"))
console.log(rewardMessage())//default value already set if no value passed

