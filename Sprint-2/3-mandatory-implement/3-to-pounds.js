// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// original program from sprint-1:
// const penceString = "399p";

// const penceStringWithoutTrailingP = penceString.substring(
//   0,
//   penceString.length - 1
// );

// const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// const pounds = paddedPenceNumberString.substring(
//   0,
//   paddedPenceNumberString.length - 2
// );

// const pence = paddedPenceNumberString
//   .substring(paddedPenceNumberString.length - 2)
//   .padEnd(2, "0");

// console.log(`£${pounds}.${pence}`);

/*
 To make the above code a reusable block of code we can declare a function called toPounds. We can use a placeholder of "pence" as an argument in the function so that it can be reused again and again. We don't need the const penceString variable any longer as we have a placeholder argument in the function. 
 */
/*
 To ensure that the initial input to the function is valid, we can use an if statement to check that the type of input is in fact a string, using the JS built-in "typeof" operator (- a special symbol, or keyword, that performs an operation on one or more values). Then it also checks the input with the .endsWith() method to make sure that the string inputted into the function ends with "p".
 */
/*
 We must alter the variable name that we are using the substring() method and "length" property on from the original name, so that it matches the function argument of "pence".
 */
/*
Then we can ensure that a valid number input is given to the function by assigning the penceNumber variable the value of penceStringWithoutTrailingP converted to a number using the Number() function.
*/
/*
 Then we use the if/else statements to do the validating. Here we check if the number assigned to the penceNumber variable is a whole number (integer) AND that the number is not a negative. If the input is valid it will run the original code and return the pence input in a formatted  pounds and pence string; if the input it invalid it will return a message indicating so to the terminal.
 */

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
console.log(toPounds("12.7p")); //result is "Invalid input. The pence amount must be in number format and must be whole numbers that are not less than 0"
