const penceString = "399p";

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

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

//2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
//Purpose: To strip away the "p" character so we are left with only the digits.
//Rationale: You cannot perform formatting or math on the letter "p".substring(0, length - 1) says "start at the beginning and take everything except the very last character."Result: "399"

//3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//Purpose: To ensure the string is at least 3 characters long by adding a leading "0" if necessary.
//Rationale: This is a "safety" step.If the input was "5p", the previous step would give us "5".By padding it to "005", we ensure there are always enough digits to represent both pounds and pence(e.g., £0.05).
//Result: "399"(No change here because it's already 3 digits, but "5" would become "005").

//4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
//Purpose: To extract the digits that represent the "pounds" portion of the price.
//Rationale: In a pence - to - pounds conversion, everything except the last two digits represents the pounds.By taking the substring from the start up to the "length minus 2," we grab that "left side" of the decimal point.
//  Result: "3"

//5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
//Purpose: To extract the last two digits(the pence) and ensure they are formatted correctly.
// Rationale: * .substring(length - 2) grabs the final two characters.

// .padEnd(2, "0") is a double - safety measure; if for some reason we only had one digit, it would add a zero to the end(e.g., turning "5" into "50").
//  Result: "99"

//6. console.log("£${pounds}.${pence}");
//Purpose: To combine the processed pieces into a human - readable currency format.
//   Rationale: This uses a template literal to inject the pounds and pence variables into a string, separated by a decimal point and prefixed with a "£" symbol.
// Final Output: "£3.99"