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
// 1. const penceString = "399p": This line declares a constant variable named `penceString` and initialises it with the string value "399p". This represents the input price in pence.

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
//    This line declares a constant variable `penceStringWithoutTrailingP`.
//    It uses the `substring()` method on `penceString` to extract a portion of the string.
//    `penceString.length - 1` calculates the index of the character just before the last one (i.e., it excludes the 'p').
//    The purpose is to remove the trailing 'p' character from the `penceString` so that we are left with only the numerical part, which is "399".

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//    This line declares a constant variable named `paddedPenceNumberString`.
//    It applies the `padStart()` method to `penceStringWithoutTrailingP` ("399").
//    `padStart(3, "0")` checks if the string's length is less than 3. If it is, it adds "0" to the beginning of the string until its length reaches 3.
//    In this specific case, "399" already has a length of 3, so it remains "399".
//    The purpose of this step is to ensure that the pence value always has at least three digits (e.g., "5p" would become "005", "99p" would become "099"). This is crucial for consistently extracting the pounds and pence parts later, especially for values less than 100p.

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
//    This line declares a constant variable named `pounds`.
//    It uses the `substring()` method on `paddedPenceNumberString` ("399").
//    `paddedPenceNumberString.length - 2` calculates the index of the character just before the last two characters.
//    This effectively extracts all characters from the start of the string up to, but not including, the last two characters.
//    In this example, it takes "3" from "399".
//    The purpose is to isolate the 'pounds' portion of the value. Since there are 100 pence in a pound, the digits representing pounds will be everything except the last two digits.

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
//    This line declares a constant variable named `pence`.
//    It first uses `substring(paddedPenceNumberString.length - 2)` on `paddedPenceNumberString` ("399"). This extracts the last two characters of the string, which are "99".
//    Then, `.padEnd(2, "0")` is called on the result ("99"). This method checks if the string's length is less than 2. If it is, it adds "0" to the end of the string until its length reaches 2.
//    In this example, "99" already has a length of 2, so it remains "99". If the original value was, for instance, "5p" (which becomes "005" after padding), this step would extract "05".
//    The purpose is to accurately extract the 'pence' portion of the value, ensuring it always has two digits, even if the original value was less than 10p (e.g., "5p" becoming "05").

// 6. console.log(`£${pounds}.${pence}`);
//    This line uses `console.log()` to display the final formatted price string to the console.
//    It uses a template literal (backticks ``) to construct the output string.
//    The `£`, `.` and the values of the `pounds` and `pence` variables are combined to form the complete price in pounds and pence format (e.g., "£3.99").
//    The purpose is to present the converted price in a user-friendly, standard monetary format.
