let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.
//const initials = firstName[0] + middleName[0] + lastName[0]

// make first, middle, and last name a string and convert it into an array
const fullNameToArr = (firstName + " " + middleName + " " + lastName).split(' ')

//to store the initials
let initials = ''

// get the initial of each item in the array and assign them to initials
for (let key in fullNameToArr){
    const value = fullNameToArr[key]
    initials += value[0]
}
console.log(initials)