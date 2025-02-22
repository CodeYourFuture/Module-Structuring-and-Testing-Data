let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

function initials(character) {
    return character.toString().slice(0,1);
  }
  
  console.log(`The first character of each string is ${initials(firstName)}${initials(middleName)}${initials(lastName)}`);



// https://www.google.com/search?q=get+first+character+of+string+mdn

