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
//2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): removes the trailing "p" from the pence string to isolate the numeric value.
//3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): ensures that the numeric value has at least three digits by padding with 3 leading zeros if necessary, .padStart(target Length, padString), adds strings to the start of the string until it reaches the target length, in this case 3, and if the string is already 3 or more characters long, it will not add any padding.
/*4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): extracts the pounds portion of the price ,paddedPenceNumberString.length =3, so paddedPenceNumberString.length - 2 = 1, so paddedPenceNumberString.substring(0, 1) = "3" it took characters from index 0 to 1*/
/*5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): extracts the pence portion of the price and ensures it has two digits by padding with a trailing zero if necessary, paddedPenceNumberString.length =3, so paddedPenceNumberString.length - 2 = 1, so paddedPenceNumberString.substring(1) = "99" it took characters from index 1 to the end of the string, then .padEnd(2, "0") adds strings to the end of the string until it reaches the target length, in this case 2, and if the string is already 2 or more characters long, it will not add any padding.*/

/*6. console.log(`£${pounds}.${pence}`): outputs the final formatted price in pounds and pence to the console, using template literals to insert the pounds and pence variables into the string. The output will be in the format "£X.YY", where X is the pounds value and YY is the pence value. In this case, it will output "£3.99".*/

