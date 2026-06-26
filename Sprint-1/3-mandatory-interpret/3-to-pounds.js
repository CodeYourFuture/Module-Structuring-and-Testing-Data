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
/*line 3-6. 
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
) : calculate  the length and then subtract 1,length is 4-1=3 , and extract substring 0 to 3 i.e 399

line 8.Padstart puts zero in beginning until it meets the desire length. The length is 3 and string length is already 3, so it remained unchanged.
paddedPenceNumberString = "399"

line 9-12. 
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
); paddedPenceNumberString.length - 2: 3-2=1 -> paddedPenceNumberString.substring(0,1)-> pounds="3"
l
ine 14-16.
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
(paddedPenceNumberString.length - 2)-> 3-2 = 1 -> substring(1).padEnd(2,"0")-> 99, the length is already two.
pence ="99"

line 18.
console.log(`£${pounds}.${pence}`);
£3.99
*/
