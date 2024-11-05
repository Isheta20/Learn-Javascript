/* Stack used in Primitive 
   Heap used in Non-Primitive    
*/

let a = "Isheta"

let anotherName = a;
anotherName = "patagobi"

console.log(a);
console.log(anotherName);

//So, we see that 'a' remained as it is bec. anotherName only got a copy of the value not pointing to the actual location of 'a'


//Non-primitive passbyvalue

let userOne = {
    email: "abc@gmail.com",
    upi: "user@ybl",
}

userTwo = userOne;

userTwo.email = "mini@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

//here, we see that they both point to same address so one change both reflect, there is no copy