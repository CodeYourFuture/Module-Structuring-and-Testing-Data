let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.
let firstInitial = firstName.slice(0,1); //first initial stored in firstInitial
console.log(firstInitial);

let middleInitial = middleName.slice(0,1);// middle name initial stored in middleInitial
console.log(middleInitial);

let lastInitial = lastName.slice(0,1);  // last name initial stored in lastInitial 
console.log(lastInitial);

let initials = firstInitial + middleInitial + lastInitial;

//let initials = `${firstName.slice(0,1)}${middleName.slice(0,1)}${lastName.slice(0,1)}`;
console.log(initials);
// https://www.google.com/search?q=get+first+character+of+string+mdn

