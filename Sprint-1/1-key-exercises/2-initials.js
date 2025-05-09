let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

let initials = `"${firstName.charAt(0)}${middleName.charAt(0)}${lastName.charAt(
  0
)}"`;
console.log(initials);

//I used the template literal with backtick and `${}`to write this code.
//charArt method return the value of a string positioned inside the (), has to be numeric.
// Note to self :The position of the character starts from 0 and not 1.

// https://www.google.com/search?q=get+first+character+of+string+mdn
