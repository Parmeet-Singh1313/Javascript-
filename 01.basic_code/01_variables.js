const accountId= 23456
let accountEmail = "singhparmeet1313@gmail.com"
var accountPassword = "34567"
accountCity = "Agra"
let accountState;
/*
Prefer not to use var keyword because of issue in block and functional scope
*/

// accountId = 89076  // changes not possible if use var keyword
console.log(accountId);  
console.table([accountEmail,accountPassword,accountCity,accountState]);

accountEmail= "parmeetsingh34@gmail.com"
accountPassword = "45897"
accountCity= "Punjab"
accountState = "Amritsar"
console.table([accountEmail,accountPassword,accountCity,accountState]);
