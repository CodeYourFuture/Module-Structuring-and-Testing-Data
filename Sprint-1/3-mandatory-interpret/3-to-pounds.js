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

/*
// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);: we used substring
  function to remove the P which would make penceStringWithoutTrailingP = "399"
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");: we used the padStart function
  to ensures that the string has a length of at least 3 characters by adding leading zeros(at the start) if necessary.
// 4. const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);: we used the
  substring fuction and length fuction to get only the amount of pound which wold work like this
      paddedPenceNumberString.substring(0,3- 2) /(0,1) and substring(0,1) will give as the 3
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
  herewe are trying the get only the pence which wold work like this 
      substring(3-2)/(1) which would give us 99 and the padEnd is used to ensure that the string has length of 
      at least 2 charactors by adding zeros (at the end)if necessary 
// 6. console.log(`£${pounds}.${pence}`);: we used console.log to print £ next to the values and "." between the pounds 
  and the pence £3.99
*/