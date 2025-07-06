// let carPrice = "10,000";
// let priceAfterOneYear = "8,543";

// carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

// const priceDifference = carPrice - priceAfterOneYear;
// const percentageChange = (priceDifference / carPrice) * 100;

// console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 3 function calls in this file:
// 1. `carPrice.replaceAll(",", "")` on line 6
// 2. `priceAfterOneYear.replaceAll("," "")` on line 7
// 3. `console.log(...)` on line 12

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error occurs on line 7: `priceAfterOneYear.replaceAll("," "")`
// The error is due to a syntax mistake in the `replaceAll` method call. There is a missing comma between the two arguments.
// To fix this, we need to add the missing comma, it should be `priceAfterOneYear.replaceAll(",", "")`.

// c) Identify all the lines that are variable reassignment statements
// The variable reassignment statements are:
// 1. `carPrice = Number(carPrice.replaceAll(",", ""));` on line 6
// 2. `priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));` on line 7

// d) Identify all the lines that are variable declarations
// The variable declarations are:
// 1. `let carPrice = "10,000";` on line 1
// 2. `let priceAfterOneYear = "8,543";` on line 2
// 3. `const priceDifference = carPrice - priceAfterOneYear;` on line 9
// 4. `const percentageChange = (priceDifference / carPrice) * 100;` on line 10
// 5. `console.log(...)` on line 12 (though this is a function call, it also serves as a declaration in this context)

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression `Number(carPrice.replaceAll(",", ""))` is converting the string representation of the car price (which includes commas) into a number.
// It first removes all commas from the string using `replaceAll(",", "")`, and then converts the resulting string into a number using the `Number` function.
// This is necessary to perform arithmetic operations on the car price, as arithmetic operations cannot be performed directly on strings.

//correct the code
let carPrice = "10,000";
let priceAfterOneYear = "8,543";

// Remove commas and convert to numbers
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// Calculate difference and percentage change
const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

// Output the result
console.log(`The percentage change is ${percentageChange.toFixed(2)}%`);

// The corrected line should be: