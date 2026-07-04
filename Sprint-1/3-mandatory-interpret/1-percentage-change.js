let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 5 function calls in this file. The function calls are made on the following lines: replaceAll() line 4, Number() line 4, replaceAll() line 5, Number() line 5, console.log() line 10.
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is coming from line 5. The error appears because there is a missing comma in the replaceAll() function. We can fix the problem by adding a comma in the replaceAll() function on line 5.
// c) Identify all the lines that are variable reassignment statements
// The lines that are variable reassignment statements are line 4 and line 5.
// d) Identify all the lines that are variable declarations
// The variable declarations are on line 1, line 2, line 7 and line 8.
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//The expression removes the comma from the string from carPrice and converts the string to a number.