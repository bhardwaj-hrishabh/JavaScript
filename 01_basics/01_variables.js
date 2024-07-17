const accountId = 144553
let accountEmail = "hrishabh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

// accountState will be undefined 
// ; is optional in js 
// modifying const value is not  allowed 
//  let and var can be modified 

accountEmail = "h2@jb.com"
accountPassword = "212321"
accountCity = "Bengaluru"


console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and 
functional use
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
// console.table will give output in the form of table 
// node filename.js    to run the code in terminal
