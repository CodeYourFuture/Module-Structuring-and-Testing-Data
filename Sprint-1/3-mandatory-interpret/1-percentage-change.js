let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// there are five function calls in this file, the lines where a call function is made are as follows:
// line 4, replaceAll()
// line 4, Number()
// line 5, replaceAll()
// line 5, Number()
// line 10, console.log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// the error is coming from line 5
// it is a syntax error, the expression priceAfterOneYear.replaceAll("," "") ismissing a comma
// to fix this problem we add comma between the two arguments

// c) Identify all the lines that are variable reassignment statements
// the lines that are variable reassignment statements: -line 4 -line 5

// d) Identify all the lines that are variable declarations
// the lines that are variable declarations: -line 1 -line 2 -line 7 -line 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// the expression calls the replace method to replace the comma with empty string
// converting the new string to a number to be able to perform math operations
