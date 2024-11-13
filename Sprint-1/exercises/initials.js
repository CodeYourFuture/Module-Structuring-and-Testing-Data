let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

let firstCharacter = firstName[0];
let secondCharacter = middleName[0];
let thirdCharacter = lastName[0];
let initials = (firstCharacter + secondCharacter + thirdCharacter);
console.log(initials);


/* Old attempt that has been updated to the above:
var firstInitial = firstName.slice(0,1);
var secondInitial = middleName.slice(0,1);
var thirdInitial = lastName.slice(0,1);
var allInitials = (firstInitial+secondInitial+thirdInitial);
console.log(allInitials); */
