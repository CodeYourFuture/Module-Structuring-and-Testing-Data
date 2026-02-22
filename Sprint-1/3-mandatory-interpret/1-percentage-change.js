let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Answer: There are 2 function calls in total. They are both `Number()` and are located on lines 4 and 5.
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Answer: The error comes from line 5. It occurs because we are trying to reassign a value to `priceAfterOneYear`, which was originally declared as a `const`. To fix it, change `const` to `let` on line 2.
// c) Identify all the lines that are variable reassignment statements
// Answer: Lines 4 and 5.
// d) Identify all the lines that are variable declarations
// Answer: Lines 1, 2, 7, and 8.
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Answer: It removes the comma from the string using `replaceAll()`, and then converts that cleaned string into a number type using `Number()`. The purpose is to convert a formatted text string into a valid mathematical number so we can do calculations with it later.