let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";
// The code above declares these three variables: firstName, middleName, and lastName.
// Each variable is assigned a string value representing aeach lement in the name.
// The task is to create a new variable take initials that combines the first character from each of these strings.
// The initials variable should contain the first letter of each name, resulting in the string "CKJ".

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

let initials = ``;
initials = firstName[0] + middleName[0] + lastName[0];
console.log(initials); // Output: CKJ
// The code above uses the bracket notation to access the first character of each string [0].
// This is a common way to get the first character of a string in JavaScript.
// https://www.google.com/search?q=get+first+character+of+string+mdn

