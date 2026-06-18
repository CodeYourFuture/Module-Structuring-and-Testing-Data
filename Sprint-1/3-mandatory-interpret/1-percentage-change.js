let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are three function call in this file it is on line 4,5 and 10.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is coming from line 5 and it is because it miss a comma between two argument.

// c) Identify all the lines that are variable reassignment statements
// Variables are reassigned in two lines and the lines are in line 4 and 5.

// d) Identify all the lines that are variable declarations
// Variables are declared in four different lines those lines are 1,2,7 and 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/* In this expression there is two function call when we start from the inside we got that replaceAll which will do is
   it replace a specific string patter with a given argument, the other one is Number which change the data type from string to number */
