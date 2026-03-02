// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
    // return the price in pounds

    // I took the code and made it as a function called toPounds with a parameter called penceString,
    // but after reviewing the code in Ai I noticed i have to add something called defensive programming,
    // to make sure the input is following the format of a string with a number followed by the letter p,
    //  so I will add an if statement to check if the input is valid and if not, using endWith() method and then return an error message.

    
    if (!penceString.endsWith("p")) {
    return "Error: Please enter a valid pence format (e.g., '399p')";
}

    const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

return (`£${pounds}.${pence}`);
}

console.log(toPounds("399p"));
console.log(toPounds("5p"));
console.log(toPounds("abc"));

