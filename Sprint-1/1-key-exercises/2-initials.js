let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.


// let initials = `${firstName.slice(0,1)}${middleName.slice(0,1)}${lastName.slice(0,1)}`; using slice on template literals

//let initials = `${firstName.charAt(0)}${middleName.charAt(0)}${lastName.charAt(0)}`; using charAt on template literals

//let initials = (firstName[0] || '') + (middleName[0] || '') + (lastName[0] || ''); using concatenation

// let initials = `${firstName[0] || ''}${middleName[0] || ''}${lastName[0] || ''}` //template literals

//let initials = [firstName, middleName, lastName].map(name => name.slice(0,1)).join('')

let initials = [firstName, middleName, lastName].map(name => name.charAt(0)).join('')

/* 
There are more efficient ways of implementing the solution, however these concepts haven't been covered yet
In these scenarios the slice and charAt have been implemented through a map

let initials = [firstName, middleName, lastName].map(name => name.slice(0,1)).join('')
let initials = [firstName, middleName, lastName].map(name => name.charAt(0)).join('')

*/

// https://www.google.com/search?q=get+first+character+of+string+mdn

console.log(initials); // display the output of initials to verify if successfuly executed
