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

const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");

console.log(`£${pounds}.${pence}`);



// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initializes a string variable with the value "399p"

//2. const penceStringWithoutTrailingP = penceString.substring(
  //   0,
  //   penceString.length - 1
  // );
  //initializes a string variable with the value "399" by removing the last character "p" from penceString

//3.  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  //initializes a string variable with the value penceStringWithoutTrailingP, with a minimum length of 3 characters, if it happens to be shorter it will add a "0" at the beginning of the string for every character that is short

//4.  const pounds = paddedPenceNumberString.substring(
//   0,
//   paddedPenceNumberString.length - 2
// ); 
  //initializes a string variable with the value of paddedPenceNumberString except the final 2 characters, thus extracting the pounds, in this case "3"

//5.   const pence = paddedPenceNumberString
// .substring(paddedPenceNumberString.length - 2)
// .padEnd(2, "0")
  //it extracts the last two characters (pence) from paddedPenceNumberString and it makes sure that there's always gonna be two by adding "0" at the end
 
//6.  console.log(`£${pounds}.${pence}`);
  //it logs £3.99