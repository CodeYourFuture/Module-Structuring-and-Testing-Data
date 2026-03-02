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
/* 
1. const penceString = "399p": initializes a string variable with the value "399p".

2. const penceStringWithoutTrailingP: this variable is now store a new value of penceString "399".
By using the .substring method(.slice method predecessor)it remove the p from the penceString value and 
reassign the new value to variable penceStringWithoutTrailingP. It start from index position 0 in this case "3" and stop at the index 2 "9".

3. const paddedPenceNumberString: this variable main role is to check if the string value total length 
at least 3, if the length short then padStart will add 0 the left from the first index(0) in this case "3" until the string length total is 3. In this case 
it select the string number "3".

4. const pounds: this variable is role is to extract the pound value from the paddedPenceNumberString.
Inside the the paddedPenceNumberString subString method parameter it have 2 value 0 and paddedPenceNumberString total string length minus 1,
the 0 is the index of the  string number that we would like to start while .length - 2 is to tell the SubString method where to stop in this case the  first "9".

5) const pence: as the name suggest this variable main role is to extract he pence value from the paddedPenceNumberString variable.
How ever this variable there are 2 method is used.
 -subString method is used to slice the string value "99" off the "399" value, how ever is now only have 1 value
 is the length of the "399" is 3 now - 2 equal to 1 and no end value. The main reason is to select where the slice will begin stop at the end 
 of the string.
 -padEnd method work exactly the same as padStart but in reverse. The padEnd method is checking to see is the paddedPenceNumberString string length at least total of 2, 
 if not they will add 0 from the selected index position from the string value "99" from the index 0 in this case is "9" to the right.

6)console.log(`£${pounds}.${pence}`): is to log and print out the value inside the terminal by using the string template, the back tick is to 
define a template literal. Then inside the template the pound sign(£) is show the pound currency, the money sign before the curly bracket is to allow 
embed variables in this case pounds and pence that separate by dot that print out a float string value.
*/
 