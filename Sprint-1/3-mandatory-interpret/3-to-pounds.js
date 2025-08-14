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
  Initialize a variable

const penceString = "399p";

 What's going on?
Create a variable penceString with the value "399p".
The string represents the price in pence with a p at the end.
 Goal: Start with a pence value to convert to pounds.

 Remove the "p"

const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);
  
What's going on?
penceString.length — the length of the string "399p" is 4.
penceString.length - 1 → 3, so we execute:

  substrig(0, 3)
As a result, from the string "399p" we get "399".
   Result:

penceStringWithoutTrailingP = "399"
 Goal: Remove the p character to leave only the numeric value in the string.

 Add leading zeros

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
 How it works:
padStart(3, "0") adds zeros on the left until the string is 3 characters long. 
 Examples:
"399" → "399" (the length is already 3, remains unchanged).
"5" → "005".
"50" → "050". 
 
Result:

paddedPenceNumberString = "399"
 Goal: Prepare a string for splitting into pounds and pence.

 Extract the number of pounds

const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);

 Parsing:
paddedPenceNumberString.length for the string "399" is 3.
paddedPenceNumberString.length - 2 → 1, so:

substring(0, 1)
Returns the first character of the string.
 Result:

pounds = "3"
Goal: Get the number of full pounds.

Extract the number of pence

const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
Step by step:
paddedPenceNumberString.length - 2 → 1, so:

substring(1)
Extracts the string starting from index 1 — we get "99".
padEnd(2, "0") pads the string with zeros up to 2 characters, if necessary.

Result:

pence = "99"
 Goal: Select the last 2 digits to display pence.

Forming the final string

console.log(`£${pounds}.${pence}`);
How it works:
Use a template string to format the result as:

£pounds.penceResult:

£3.99
Goal: Display the final amount in a familiar format.
Results at each step
Step Code Result
1️ const penceString = "399p"; "399p"
2️ penceStringWithoutTrailingP "399"
3️ paddedPenceNumberString "399"
4️ pounds "3"
5️ pence "99"
6️ Total Output £3.99

Examples for different values
Input Result
"399p" £3.99
"5p" £0.05
"1234p" £12.34
"75p" £0.75
"10000p" £100.00
