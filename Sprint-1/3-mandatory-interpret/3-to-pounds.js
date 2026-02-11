const penceString = "399p";

const penceStringWithoutTrailingP = 
penceString.substring(0, penceString.length - 1); // => "399";

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); // => "399";
const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2); // => "3"

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2) // => "99"
  .padEnd(2, "0"); 

console.log(`£${pounds}.${pence}`); // => "3.99"

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initializes a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP uses the substring()method to remove the last character.
// 3. const paddedPenceNumberString tries to add "0" at the beginning, but the length is already 3; so it does nothing.
// Its worthy to talk about padStart() method. we use this to add a character at the beginning of a string.
// 4. const pound uses the substring() method on paddedPenceNumberString variable and remove its last two characters.Its value ll be "3".
// 5. const pence uses substring() on paddedPenceNumberString variable and take its length and then subtract it with 2 ...
// which will remain like this .substring(1), so it take the index 1 till the last which is only one more index that its character is 9 ...
// so the final value ll be "99". then uses padEnd( 2, "0") that can not add "0" at the end, as we set the length "2".
// 6. Lastly, we print the value of our pound and pence variable. which is "3.99".