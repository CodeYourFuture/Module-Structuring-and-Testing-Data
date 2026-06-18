let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 5 function calls. In the fourth line Number () and replaceAll ().
// In the fifth line same as line 4 Number () and replaceAll ().
// Last one in seventh line console.log ().

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is in line 5. The error is occurring because there is a missing comma in the replaceAll function. The correct code should be: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable reassignment statements
// Line 4 and line 5 are variable reassignment statements. In line 4, carPrice is being reassigned with the new value after removing the comma and converting it to a number. In line 5, priceAfterOneYear is being reassigned in the same way.

// d) Identify all the lines that are variable declarations
// Line 1 and line 2 are variable declarations. In line 1, carPrice is declared and initialized with the string value "10,000". In line 2, priceAfterOneYear is declared and initialized with the string value "8,543".

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The expression removes the comma from the price string and converts it into a number. This allows JavaScript to use the value in calculations.
