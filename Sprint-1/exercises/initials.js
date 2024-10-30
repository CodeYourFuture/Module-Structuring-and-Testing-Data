let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.
const charFirstN = firstName.charAt(0);
const charMiddleN = middleName.charAt(0);
const charLastN = lastName.charAt(0);
const firstCharacters = `${charFirstN}${charMiddleN}${charLastN}`;

console.log(firstCharacters);