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
// 3. we are declaring a variable and assigning it the variable penceString which holds the value "399p" but without the p - the method .subString is used
// here to remove the p.
// 8. we are declaring a variable and assigning it the variable penceStringWithoutTrailingP which holds the value "399
// we are then using the .padStart method, however the method will not make any change because we have passed in the argument 3 which i
// is the total length the string should be after padding - our string is already 3 lengths long.
// 10. we are using a substring to slice our string from the first index to paddedPenceNumberString.length - 2, paddedPenceNumberString.length
// will give us the number 3, so paddedPenceNumberString.length - 2 also means 3 - 2 which gives us 1, so from index 0 which is 3 to index 1 which is exclusive.
// 15. we are declaring a variable pence and assigning it the variable paddedPenceNumberString which holds the result of a couple
// method chains, firstly a .substring method with the argument "paddedPenceNumberString.length - 2" which also means 3 - 2, so it will
// slice from index 1 to the end as we have not given a second argument, then we follow with a padEnd, this time we are adding
// characters to the end of the string - we want a total of two characters
//19. we use a string template to console log

