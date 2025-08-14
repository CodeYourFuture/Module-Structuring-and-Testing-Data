let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

// Answer
let initials = `${firstName.slice(0,-5)}${middleName.slice(0,-8 )}${lastName.slice(0,-6)}`;
console.log(initials)

//Corrections

let initials = firstName.charAt(0) +(middleName ?  middleName.charAt(0): '' ) + lastName.charAt(0)
console.log(initials)
// https://www.google.com/search?q=get+first+character+of+string+mdn

