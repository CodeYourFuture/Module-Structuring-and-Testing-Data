let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 5 function calls
// replaceAll is called twice on line 4 and line 5
// Number is called twice on line 4 and line 5
// console.log is called once on line 7

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// its coming from line 4 and line 5 because we are trying to call the replaceAll method on a string that contains a comma, which is not a valid number. To fix this problem, we can remove the commas from the strings before converting them to numbers. We can do this by using the replaceAll method to replace all commas with an empty string before calling the Number function. This is already done in the code, so there should be no error when running it.

// c) Identify all the lines that are variable reassignment statements
// line 4 and 5

// d) Identify all the lines that are variable declarations
// line 1, 2, 7, 8.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression Number(carPrice.replaceAll(",","")) is first calling the replaceAll method on the carPrice string to remove all commas, and then it is converting the resulting string to a number using the Number function. The purpose of this expression is to convert the carPrice string, which may contain commas, into a numeric value that can be used for calculations.