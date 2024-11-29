// Predict and explain first...
//〰️ The function capitalise takes a string str as input and capitalizes the first letter of the string:
//〰️ But in this code we get an error because of the way the variable str is being declared inside the function.


// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
//〰️ The parameter str is already declared as an argument in the function capitalise(str).
//〰️ Inside the function, it's trying to redeclare str again with let str, which creates a conflict because str is already defined as a parameter.
//〰️ To fix the issue, remove let and directly assign the value to str or modify the str parameter directly 


//〰️ str[0].toUpperCase() converts the first character to uppercase.
//〰️ str.slice(1) gets the rest of the string from the second character onward.
//〰️ Then, it combines them into a new string with the first letter capitalized, which is then returned.
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log("fatma"); // 〰️ Outputs "Fatma"