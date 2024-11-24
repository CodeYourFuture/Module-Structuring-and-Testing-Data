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

  // 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1):
  //     it gets (extract) value excluding the last index (last character (trailing)) of penceString variable (which is "p") by using substring() method, to gets only numeric value. and defines it in penceStringWithoutTrailingP variable.
          
  //         How the substring() used:
  //             substring(start index (0), end index (length of string - 2))

  // 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"):
  //     it ensures the value contains at least 3 character and in case of less than 3 characters adds zero ("0") at beginning of value by using padStart() method. then defines it as value of paddedPenceNumberString variable.

  //         How padStart() used:
  //             padStart(needed length (3), if not add "string" to start till reach ("0"))

  // 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2):
  //     it gets (extract) the value excluding last 2 index of paddedPenceNumberString variable by using substring() and defines it to pounds variable.

  // 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"):
  //     it extracts only last two indexes of paddedPenceNumberString variable by substring(), and ensures the value is at least 2 character, in case of less than 2 adds zero ("0") at the end by padEnd() method and defines the result in pence variable.

  //         How padEnd() works:
  //             padEnd(needed length, if not add "string" to end till reach)

  // 6. console.log(`£${pounds}.${pence}`):
  //     it prints the formatted string with "£" followed by values of pound and pence variables
