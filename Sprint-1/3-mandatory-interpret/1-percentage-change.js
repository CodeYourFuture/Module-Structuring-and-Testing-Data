let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?


// a) There are 2 function calls in this file:
//    1. `carPrice.replaceAll(",", "")` on line 4
//    2. `priceAfterOneYear.replaceAll(",", "")` on line 5


// b) The error occurs on line 5 because there is a syntax error in the `replaceAll` method call. 
// The correct syntax should be `replaceAll(",", "")` instead of `replaceAll("," "")`. 
// To fix this, you need to add a comma between the two arguments.

// c) The variable reassignment statements are:
//    1. `carPrice = Number(carPrice.replaceAll(",", ""));` on line 4
//    2. `priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));` on line 5

// d) The variable declarations are:
//    1. `let carPrice = "10,000";` on line 1
//    2. `let priceAfterOneYear = "8,543";` on line 2
//    3. `const priceDifference = carPrice - priceAfterOneYear;` on line 7
//    4. `const percentageChange = (priceDifference / carPrice) * 100;` on line 8

// e) The expression `Number(carPrice.replaceAll(",", ""))` is converting the string representation of the car price (which includes commas) into a number.
// The `replaceAll(",", "")` part removes all commas from the string, and then the `Number()` function converts the resulting string into a numeric value.  