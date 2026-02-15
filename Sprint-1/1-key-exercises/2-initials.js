let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

//Answer:
//Solution using charAt() a Javascript string method that returns a character's position, using template literal 
// and toUpperCase to ensure it is capitalized.
let initials = `${firstName.charAt(0)}${middleName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();


//alternative solution using string indexing, template literal and toUppercase(to make sure it is capitalized)
//let initials - `${firstName[0]}${middleName[0]}${lastName[0]}`.toUpperCase());

// https://www.google.com/search?q=get+first+character+of+string+mdn

