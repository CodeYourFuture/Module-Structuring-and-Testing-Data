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
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1); : a variable declared and a function called
// in the variable with substring method. In the substring method (penceString.length - 1) = 4 -1 = 3 then the function remains
// penceString.substring(0, 3); from which we find const penceStringWithoutTrailingP = 399p.penceString.substring(0, 3); to 
// const penceStringWithoutTrailingP = 399
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//    const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2); : another variable const paddedPenceNumberString 
// declared and a function called in the variable with padStart method. penceStringWithoutTrailingP.padStart(3, "0"); will be 399.padStart(3, "0");
// and finally const paddedPenceNumberString = "399". Secondly, another variable const pounds declared in which calculates the value in
// pounds. For this, (0, paddedPenceNumberString.length - 2); will be (0, 1) and the const pounds = 399.substring(0, 1); calculates 
// const pounds = 3
// 4. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"); : a variable pence declared
// to calculate the value in pence. so, if we put the values it will be const pence = 399.substring(1).padEnd(2, "0"); which at first works for
// substring and then for padEnd and will be const pence = 99;
// 5. console.log(`£${pounds}.${pence}`); : this console function printed the prince in pounds and pence.And finally the printed output
// will be £3.99