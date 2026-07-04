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

// Step-by-step breakdown:
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1)
//    Removes the trailing "p", leaving "399"
// 3. paddedPenceNumberString = "399".padStart(3, "0")
//    Ensures the string is at least 3 characters long by padding with "0" on the left.
//    "399" is already 3 chars so it stays "399". For "9p" this would give "009".
// 4. pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2)
//    Takes all characters except the last 2. For "399" this gives "3" (the pounds part).
// 5. pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0")
//    Takes the last 2 characters ("99") as the pence part, and pads to 2 chars if needed.
// 6. console.log(`£${pounds}.${pence}`): prints "£3.99"
