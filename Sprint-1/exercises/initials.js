let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.
const initials=firstName.charAt(0)+middleName.charAt(0)+ lastName.charAt(0); //const initials=firstName.slice(0,1)
console.log(initials);
