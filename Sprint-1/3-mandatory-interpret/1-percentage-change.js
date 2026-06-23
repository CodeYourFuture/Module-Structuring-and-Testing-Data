let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There is 5 function calls in line 4, 5 and 10. Number() and console.log() both are the function.
// And XXX.replaceAll(",", "") is another function call. So in total there are 5 function calls in this code.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// It shows "SyntaxError: missing ) after argument list" point at the end of line 5. I can see there is a missing comma in method .replaceAll() comparing to line method structure. By adding the comma after the ",", the error is solved.

// c) Identify all the lines that are variable reassignment statements
// Line 4 and 5 are variable reassignment statements.

// d) Identify all the lines that are variable declarations
// Line 1, 2, 7 and 8 are variable declarations.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// This expression is removing the comma within the value contains in the variable being called.