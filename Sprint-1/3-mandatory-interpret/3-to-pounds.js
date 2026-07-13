const penceString = "380p";

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

Step 1:
we create a variable called penceString and store the text "339p".

Step 2:

a) . (dot) lets us use something that belongs to the string.
b) length is a property that tells us how many characters are in the string. There are 4 characters so returns 4.
c) penceString.length - 1 which means 4 - 1 = 3 We want to remove the last character ("p"), so we stop before it.
d) penceString.substring(0, 3) substring(start, end) start = where to begin end = where to stop (not including that position) So: substring(0, 3)

Start at character 0 and stop before character 3. Why? We don't want the "p" anymore because we only need the number.

Step 3: 
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); 

It means If this string is shorter than length, add the character to the beginning until it reaches that length. Our value already has 3 characters so nothing changes.

Step 4:

const pounds = paddedPenceNumberString.substring(
  0, 
  paddedPenceNumberString.length - 2);

a) paddedPenceNumberString.length returns 3 then 3 - 2 is 1. 

Why? because the last 2 digits are always the pence and everything before them is the pounds.

Step 5:

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

  a) substring(length - 2) the length is 3 so substring(1) means Start at index 1 and keep going to the end.

  b) .padEnd(2, "0")  which means if the string is shorter than 2 characters, add "0" to the end.


Step 6:

  console.log(`£${pounds}.${pence}`);
  
Inside it is a template literal, which uses backticks (`): and `£${pounds}.${pence}` means insert the value of this variable here. 

If pounds = "3" pence = "99" then javascript prints 3.99


*/