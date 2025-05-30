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
/*
2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): To start with (and following javascript's order of preference - i.e. the order in which parts of the expression are evaluated) we evaluate the inner most part of the expression assigned to penceStringWithoutTrailingP, which is penceString.length - 1. PenceString.length contains the length() method which gets the length of the string or in other words the number of characters in the string (includes any spaces and punctuation). In this case, penceString is "399p", which has 4 characters (3 digits and the letter "p"). So penceString.length evaluates to 4. Then we subtract 1 from that value, which gives us 3. The substring() method is then called on penceString. The substring() method is used to extract a portion of a string between two specified indices (it uses 0-based indexing, meaning the first character "3" is at index 0, then "9" is at index 1, "9" is at index 2 and "p" is at index 3), and returns that portion as a new string. In this case the substring() method extracts the characters from index 0 to index 3 (but NOT including index 3) of penceString, which gives us "399". So penceStringWithoutTrailingP is now "399".

3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): To start with we evaluate the expression assigned to paddedPenceNumberString, which is penceStringWithoutTrailingP.padStart(3, "0"). The padStart() method is used to pad the current string with another string. It ensures that the string has a minimum length of 3 characters and if it is shorter than that, it pads the start (or the LEFT) of the string with "0" characters until it reaches the desired length. The pad method helps ensure that the values in the variables are formatted correctly for use. In this case, penceStringWithoutTrailingP is "399", which has a length of 3, so it does not need to be padded. Therefore, paddedPenceNumberString remains "399".

4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): Firstly, the length() method is used again and the length of paddedPenceNumberString (which is "399") is 3. We then subtract - 2 from that value, which gives us 1. The substring() method is then called on paddedPenceNumberString, extracting the characters from index 0 to index 1 (but NOT including index 1) of paddedPenceNumberString, which gives us "3". So pounds is now "3".

5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): To start with length() method is used again on paddedPenceNumberString (which is "399") and gives a length of 3. We then subtract - 2 from that value, which gives us 1. Then the substring() method is then called on paddedPenceNumberString, and uses one parameter - the value of the length method (i.e. 1). When the substring() method in JavaScript is called with only one parameter, that parameter is treated as the starting index, and the method extracts the substring starting from that index all the way to the end of the string. Therefore here we get the characters from index 1 (we got this index number from the length() method) to the end of the string, which gives us "99". Next, we evaluate the padEnd() method. The padEnd() method is used to pad the current string with another string, again it ensures taht the format of the values is correct for use. Here, it ensures that the string has a minimum length of 2 characters and if it is shorter than that, it pads the end (or the RIGHT) of the string with "0" characters until it reaches the desired length, but since this already has two characters, it does not need to be padded and the value of pence remains "99".

6. console.log(`£${pounds}.${pence}`): Finally, we evaluate the console.log() method, which is used to log the output the value in its parentheses, to the console. Here, the value in the parentheses is a template literal, indicated by the backticks (`). The template literal uses string interpolation (or string substitution) to insert the values of the variables pounds and pence into the string (The expression inside ${} is evaluated, and its result is inserted into the string at that location). Therefore taking the values of the Pound and pence variables, we get the output "£3.99" in the console. 
*/

/*
The overall purpose of the this code is to convert a price in pence (with a "p" at the end) into a properly formatted string representing the price in pounds and pence (without the trailing "p").
*/
