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
// 1. const penceString = "399p": initializes a string variable with the value "399p"

// 2. const penceStringWithoutTrailingP: give a string variable  without last character, which is "p".
// We use method substring to get under 0-index string character as `a start-parameter` of substring and inside the substring function
// calling function (penceString.length - 1) to get `the end` parameter of substring. As a result we got `399` without `p`.

// 3. const paddedPenceNumberString: the padStart method pads 0 of the start nceStringWithoutTrailingP variable until
// it becomes 3-character length.

// 4. const pounds: give a string variable  without last 2 characters, which are "99".
// We use method substring to get under 0-index string character as `a start-parameter` of substring and inside the substring
// calling function (paddedPenceNumberString.length - 2) to get `the end` parameter of substring (not included). As a result we got `3` without `99`.

// 5. const pence:
// - .substring(0, paddedPenceNumberString.length - 2) to substring the last two string characters "99" from "399"
// length -2  of "399" is "3", "3-2=1", so under index `0` as a start parameter we have figure 3 and under index `1`as
// `the end parameter` we have `9`(not include), As a result we subtracted everything except "99".
// - .padEnd(2, "0") we use method padEnd to get at least 2 characters by adding "0" at the end of our string. S0 we get 99.

// 6. console.log(`£${pounds}.${pence}`): to return final price we use two gotten variables above and before them
// £ sign and dot between them. As a result we have: "£3.99" string.
