const penceString = "399p";
const penceStringWithoutTrailingP = penceString.substring( 0, penceString.length - 1);
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring( 0 , paddedPenceNumberString.length - 2);
const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2)
.padEnd(2, "0");
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP = penceString.substring( 0, penceString.length - 1): creates a new string with the last character removed by taking a substring from index 0 up to 
//    penceString.length - 1, it removes the trailing "p" so we are left with the numeric pence portion as a string.
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): ensures the numeric string has at least 3 characters by adding leading zeros if required. 
//    padStart(3, "0") will left-pad with "0" until the length is at least 3, so the code expects to split the string into ...pounds and last two digits = pence. 
//    By guaranteeing at least 3 characters, the substring operations that follow always have at least one digit for pounds and two for pence.
// 4. const pounds = paddedPenceNumberString.substring( 0 , paddedPenceNumberString.length - 2): takes the substring from the start up to the character two from the end. 
//    That is, everything except the last two characters. as the last two characters represent pence; everything before that is pounds. Splitting this way converts a string of 
//    pure pence into pounds and pence parts.
// 5. substring(paddedPenceNumberString.length - 2): takes the last two characters (the pence portion).
// 6. .padEnd(2, "0"): would add trailing zeros to make sure the pence string is at least 2 characters long.