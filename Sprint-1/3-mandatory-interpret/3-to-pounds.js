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

// Answer
const penceString = "399p"
// declares a variable penceString and assigns a value "399p" to it.

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
// Step-by-step breakdown
// 1. const

// What it means:
// const is short for constant.
// It’s a keyword in JavaScript used to declare a variable — a named place in memory where we store a value.

// What makes it special:
// Once you assign a value to a const variable, you cannot reassign it later.

// 2. penceStringWithoutTrailingP

// What it is:
// This is the name of the variable we’re creating.


// 3. =

// What it means:
// The equals sign here means assignment, not comparison.
// It tells JavaScript: “Store the value on the right-hand side into the variable on the left-hand side.”

// So, penceStringWithoutTrailingP will hold whatever value comes from the code on the right side.

// 4. penceString

// What it is:
// This is a variable that was created earlier in the code:

// 4. .substring(...)

// What it is:
// .substring() is a built-in method (a function that belongs to strings) in JavaScript.

// What it does:
// It extracts a section (or slice) of a string, starting and ending at specific positions (index numbers).

// The first number is where to start (inclusive).

// The second number is where to stop (exclusive, it doesn’t include that index).

// ( 0, penceString.length - 1 )

// These are the arguments (inputs) given to the substring() function.

// Let’s understand each one:

// 0

// This means: “Start from the very first character of the string.”
// In JavaScript, string positions start counting at 0, not 1.

// penceString.length

// .length is a property (not a function).
// It gives the number of characters in the string.

// For "399p", penceString.length is 4.

// penceString.length - 1

// This means “one less than the total length.”

// 4 - 1 = 3.

// So we’re telling JavaScript: “Stop right before the last character.”

// Putting it all together:
// penceString.substring(0, penceString.length - 1) means “Take the text in penceString, start at position 0, and stop right before the last character.”
// So for "399p", it returns "399" — it removes the final p.
// The variable penceStringWithoutTrailingP will now contain: "399"

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// Step-by-step breakdown
// 1. const

// Keyword meaning:
// const is short for constant.
// It tells JavaScript that we’re creating a new variable whose value cannot be changed later.

// Why use it here?
// We only need to store the processed result; we’re not planning to change it again.

//  2. paddedPenceNumberString

// This is the variable’s name.

// 3. =

//  equals sign here is the assignment operator.

// It means “store the result on the right-hand side into the variable on the left-hand side.”

// 4. penceStringWithoutTrailingP

// This is another variable that was defined earlier in the program.

// It holds a string like "399", "50", or "5", after removing the “p” at the end of the original price (like "399p" → "399").

// 5. .padStart(3, "0")

// This is a string method — something you can call on a string to make it do something.

// Let’s break it down further:

// a) The dot (.)

// The dot connects the variable (penceStringWithoutTrailingP) with a method (a built-in action it can perform).

// In English: “Hey JavaScript, take this string and do the padStart operation on it.”

// b) padStart(...)

// This is the method name.

// It “pads” the start (the beginning) of a string with extra characters until it reaches a certain length.

// c) The parentheses (3, "0")

// These are the arguments — pieces of information you pass to the method.

// The first argument (3) means:
// “Make the string at least 3 characters long.”

// The second argument ("0") means:
// “If it’s shorter than that, add zeros ("0") at the start.”

// Putting it all together
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// When JavaScript checks the length, it sees that it’s already 3 characters long, so it doesn’t add any zeros.
// the result "399" is stored in the variable "paddedPenceNumberString"

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
// paddedPenceNumberString.length means the length of the character "399" is 3.
// paddedPenceNumberString.length - 2 means 3 - 2 = 1
// paddedPenceNumberString.substring(0 , 1) means take everything from position 0 up till position 1 exclusive. This will return 3
// const pounds means store the value 3 inside the variable pounds.

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
// paddedPenceNumberString.length means the length of the character "399" is 3.
// paddedPenceNumberString.length - 2 means 3 - 2 = 1
// .substring(paddedPenceNumberString.length - 2) means .substring(1) which means take everything from positon 1 to the end. This returns 99
// .padEnd(2, "0") means make sure the string has at least two characters. If not, add zeros ("0") at the end. for this exercise, 99..padEnd(2, "0") will return 99
// so, const pence means variable pence will store the value 99

console.log(`£${pounds}.${pence}`);
// console meaans terminal and log means print or show this message.
// `£${pounds}.${pence}` is a literal template which means £3.99
// so, print £3.99 to the terminal


