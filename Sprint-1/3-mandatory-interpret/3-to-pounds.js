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

// 2. const penceStringWithoutTrailingP= Removes the trailing "p" character so we are left with just the numeric part: "399"
// to do a step by step breakdown: .substring(start,End), which "0" represents the start index "0" and penceString.length-1 is a common way to get the index of the last character in any string.
// penceString.length - 1 → length of "399p" is 4, so 4 - 1 = 3
// so now .substring(start,End)  extracts characters from index 0 to index 3 (not including 3).
// "399p".substring(0, 3) // returns "399", since counting starts from index 0

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// .padStart(3, "0") ensures the string is at least 3 characters long and If it's shorter (like "5" or "99"), it pads it from the start with zeros.
// example "5"= 005 or "88"= 088 it makes sure the characters are always three by adding zro when its shorter
// in this case "399" stays "399"

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
// Gets all but the last two digits
// paddedPenceNumberString = "399"-length is 3, so 3 - 2 = 1
// substring(0, 1) means get characters from index 0 up to index 1 (not including 1)
// "399".substring(0, 1) → "3" its purpose is to extract the pound from the string like this 399p= £3.99

// 5.const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length-2).padEnd(2,"0")
//  (paddedPenceNumberString.length - 2) takes the last two digits of the string "399"- 3-2=1
// .substring(1): this is saying give me the part of the string starting at this index, and go to the end
// so in "399" index 1 is 9 so we will get 99, which gives us index 1 to the end
// .padEnd(2, "0"): Makes sure the result has at least 2 digits, padding with "0" if it’s too short like "5"=05,makes it two digit
//"399" → last two digits → "99" → no padding needed → stays "99"
//Extracts the pence part of the string — always exactly 2 digits to match £x.xx format.

// 6. console.log(£${pounds}.${pence});
// Combines the two parts i have built:pounds and pence then uses template literal syntax to insert the variables into a string
// and finally prints it like this £3.99

// Overall Purpose of the Code:
// This code takes a string like "399p" (meaning 399 pence) and formats it as a proper British currency string like £3.99.It handles other cases too, like "5p" → £0.05 or "99p" → £0.99, thanks to the padding.
