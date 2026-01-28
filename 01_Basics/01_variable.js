const accountId = 144553
let accountEmail = "prakhr@google.com"
var accountPass = "12345"
accountCity = "Jodhpur"

let accountState;

// accountId = 2 //not allowed

accountEmail = 'abc@g.com'
accountPass = "21212"
accountCity = "Raipur"

console.log(accountId);

/*
Do not use var
because issue in scope 
*/

console.table([accountEmail, accountPass, accountCity, accountId, accountState])
