const accountId = 234324
let accountEmail = "isheta@google.com"
var accountPassword = "123445"
accountCity = "Ambala" //can declare variable like this alse but prefer not to

// acccountId = 2 // const cannot be changed it is constant
console.log(accountId);

accountEmail = "abc@zyz.com"
accountPassword = "242434"
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accountPassword])

/*
    Prefer not to use var 
    because of issue in block scope and functional scope
*/

let accountState;
console.log(accountState);
