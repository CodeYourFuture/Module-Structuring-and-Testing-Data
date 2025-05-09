let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

// https://www.google.com/search?q=get+first+character+of+string+mdn

// MY SOLUTION START //

// Get first character of each name, store it in a string, and remove spaces with trim().
let initials = `${firstName.charAt(0)}${middleName.charAt(0)}${lastName.charAt(
  0
)}`;

// View output to check if 'initals' variable matches the expected output 'CKJ'.
console.log(initials);

// MY SOLUTION END //
