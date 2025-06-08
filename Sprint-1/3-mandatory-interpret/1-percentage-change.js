let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Answer: there is three functions being called in this file.
// 1. Number(carPrice.replaceAll(",", "")) which is on line 4.
// 2. Number(priceAfterOneYear.replaceAll("," "")) which is on line 5.
// 3. console.log(`The percentage change is ${percentageChange}`) which is on line 10.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Answer: An error occurred on line 5 because there was a missing comma in the function call and that was causing a syntax error.
// To fix this I added the missing comma in the function call on line 5.

// c) Identify all the lines that are variable reassignment statements
// Answer: there are two variable files are reassignment statements in this file. as we declared the variables on lines 1 and 2 with the let statements.
// 1. carPrice = Number(carPrice.replaceAll(",", "")); on line 4.
// 2. priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")); on line 5.

// d) Identify all the lines that are variable declarations
// Answer: there is four variables declared in this file. as they are defined with the statements "let and const".
// 1. let carPrice = "10,000"; on line 1.
// 2. let priceAfterOneYear = "8,543"; on line 2.
// 3. const priceDifference = carPrice - priceAfterOneYear; on line 7.
// 4. const percentageChange = (priceDifference / carPrice) * 100; on line 8.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Answer: this expression converts the string value of carPrice which contains a comma into a number by first removing the comma using the replaceAll method and then converting the resulting string to a number using the Number function. This is necessary because mathematical operations require numeric values and the original value of carPrice is a string with a comma, which would not work correctly in calculations.
// its purpose is to ensure that the carPrice variable holds a numeric value so that math can be done with the code and be able to work out the percentages.
