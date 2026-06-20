let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.


function first(firstName, middleName, lastName){

    let initials = firstName.slice(0,1) + middleName.slice(0,1) + lastName.slice(0,1);

  return `${initials}`;
}
console.log(first(firstName, middleName, lastName));


// https://www.google.com/search?q=get+first+character+of+string+mdn

