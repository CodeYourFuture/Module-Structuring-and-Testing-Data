// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

/*const penceString = "399p";// Initializes the string and extracts all characters except the trailing 'p'
const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); 
const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);   // Extracts the pounds part by taking all digits except the last two
const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"); // Extracts the pence portion of the price by taking the last two digits and ensures it has exactly two digits.
console.log(`£${pounds}.${pence}`); */

function toPounds(pence) {
  if (typeof pence !== "string" || !pence.endsWith("p")) {
    return "Invalid input. The input must be a string ending with 'p'.";
  }

  const penceStringWithoutTrailingP = pence.substring(0, pence.length - 1);
  const penceNumber = Number(penceStringWithoutTrailingP);

  if (Number.isInteger(penceNumber) && penceNumber >= 0) {
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(
      3,
      "0"
    );
    const pounds = paddedPenceNumberString.substring(
      0,
      paddedPenceNumberString.length - 2
    );

    const pennies = paddedPenceNumberString
      .substring(paddedPenceNumberString.length - 2)
      .padEnd(2, "0");

    return `£${pounds}.${pennies}`;
  } else {
    return "Invalid input. The pence amount must be in number format and must be whole numbers that are not less than 0";
  }
}

console.log(toPounds("5498p")); //result is £54.98
console.log(toPounds("63p")); //result is £0.63
console.log(toPounds("5498")); //result is "Invalid input. The input must be a string ending with 'p'."
console.log(toPounds("-99p")); //result is "Invalid input. The pence amount must be in number format and must be whole numbers that are not less than 0"
console.log(toPounds("pp")); //result is "Invalid input. The pence amount must be in number format and must be whole numbers that are not less than 0"
console.log(toPounds("12.7p")); //Invalid input. The pence amount must be in number format and must be whole numbers that are not less than 0
