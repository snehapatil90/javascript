const accountId = 1443535
let accountEmail = "sneha@google.com"
var accountPassword = "12345"
accountCity = "Pune"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail = "sneha@sneha.com"
accountPassword = "213213"
accountCity = 'Mumbai'

console.table([accountId, accountEmail, accountPassword, accountCity])