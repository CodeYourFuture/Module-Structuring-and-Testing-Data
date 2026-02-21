const penceString = "9p";

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

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1) : intialises a variable
//    with the value of the penceString variable with the last character "p" removed.

// a. This is achieved by using the substring method on the penceString variable
//    the substring method enables the program to manipulate the penceSting variable by targeting and removing characters in the string.

// b. The first argument of the substring method indicates the starting index; (0) which is 399p[0] = "3"

// c. The second argument of the substring method indicates the ending index (penceString.length - 1)
//    (.length) returns the length of the string object which is 4, and (-1) targets the last character in the string which is "p".
//
// d. Therefore, the substring method will return a new string that starts from index 0 and ends at index 3 which is "399"

// e. If const penceString = "1399p" the penceStringWithoutTrailingP variable will have the value "1399"
//    because the substring method will indicate the starting index as (0 which = "1")
//    and the ending index as (penceString.length - 1) which is 5 - 1 = 4, which is "p"
//    therefore it will return a new string that starts from index 0 and ends at index 4 which is "1399"

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0") : initialises a variable
//    with the value of the penceStringWithoutTrailingP variable with padding added to the start of the string
//    until it reaches a total length of 3 characters.

// a. This is achieved by using the padStart method on the penceStringWithoutTrailingP variable
//    the padStart method enables the program to manipulate the penceStringWithoutTrailingP variable
//    by adding padding to the start of the string until it reaches a specified length.

// b. The first argument of the padStart method indicates the target length of the resulting string which is 3 in this case.

// c. The second argument of the padStart method indicates the string to use to fill or pad which is "0" in this case.
//
// d. Therefore, if the penceStringWithoutTrailingP variable has a length of less than 3 characters,
//    the padStart method will add "0" characters to the start of the string until it reaches a total length of 3 characters.
//    In this case, since penceStringWithoutTrailingP is "399" which already has a length of 3 characters,
//    the padStart method will not add any padding and paddedPenceNumberString will also be "399".

// e. if const penceStringWithoutTrailingP = "99" the paddedPenceNumberString variable will have the value "099"
//    because the padStart method will add one "0" character to the start of the string until it reaches a total length of 3 characters.

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2) : initialises a variable
//    with the value of the paddedPenceNumberString variable with the last two characters removed.

// a. This is achieved by using the substring method on the paddedPenceNumberString variable
//    the substring method enables the program to manipulate the paddedPenceNumberString variable by targeting and removing characters in the string.

// b. The first argument of the substring method indicates the starting index; (0) which is 399[0] = "3"

// c. The second argument of the substring method indicates the ending index (paddedPenceNumberString.length - 2)
//    (.length) returns the length of the string object which is 3, and (-2) targets the last two characters in the string which is "99"
//
// d. Therefore it will return a new string that starts from index 0 and ends at index 1 which is "3"

// d. If const paddedPenceNumberString = "099" the pounds variable will have the value "0" because the substring method
//    will indicate the starting index as (0 which = "0") and the ending index as (paddedPenceNumberString.length - 2)
//    which is 3 - 2 = 1, which is "9" therefore it will return a new string that starts from index 0 and ends at index 0 which is "0"

// e. if penceString = "1399p" ; const penceStringWithoutTrailingP = "1399" ; const paddedPenceNumberString = "1399"
//    because the padStart method will not add any padding since the length of penceStringWithoutTrailingP is already 4 characters
//    which is greater than the target length of 3 characters. therefore the const pounds variable will have the value "13"
//    because the substring method will indicate the starting index as (0 which = "1") and the ending index as
//    (paddedPenceNumberString.length - 2) which is 4 - 2 = 2, which is "9" therefore it will return a new string that starts from index 0
//    and ends at index 1 which is "13"

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0") : initialises a variable
//    with the value of the last two characters of the paddedPenceNumberString variable with padding added to the end of the string
//    until it reaches a total length of 2 characters.

// a. This is achieved by using the substring method on the paddedPenceNumberString variable to extract the last two characters of the string,
//    and then using the padEnd method to add padding to the end of the string until it reaches a specified length.

// b. The first argument of the substring method indicates the starting index which is (paddedPenceNumberString.length - 2)
//    which targets the last two characters in the string. The ending index is not provided, so it will extract until the end of the string.
//

// c. The padEnd method is then used on the resulting string from the substring method to add padding to the end of the string
//    until it reaches a total length of 2 characters.

// d. The first argument of the padEnd method indicates the target length of the resulting string which is 2 in this case.

// e. The second argument of the padEnd method indicates the string to use to fill or pad which is "0" in this case.

// f. Therefore, if the paddedPenceNumberString variable has a length of less than 2 characters, the padEnd method will add "0" characters
//    to the end of the string until it reaches a total length of 2 characters.
//    In this case, since paddedPenceNumberString is "399" which has a length of 3 characters,
//    the substring method will extract the last two characters "99"
//    and then the padEnd method will not add any padding since the length of the resulting string is already 2 characters.
//    therefore pence will be "99"

// g. if penceString = "9p" ; const penceStringWithoutTrailingP = "9" ; const paddedPenceNumberString = "009" ;
//    const pounds = "0" ; const pence = "09" because the substring method will extract the last two characters "09"
//    and then the padEnd method will not add any padding since the length of the resulting string is already 2 characters.
//    therefore pence will be "09"

// 6. console.log(`£${pounds}.${pence}`) : outputs the final result to the console in the format of "£pounds.pence"
//    where pounds and pence are the values of the pounds and pence variables respectively.
