let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made. 
// There are 5 function calls in this file. Lines: 4, 5 , 7, 8, and 10

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error was occuring in line 5 because of a missing comma separating the two arguments ("," ""));

// c) Identify all the lines that are variable reassignment statements
// Lines 4 and 5 are variable reassignment statements because they are changing the value of the variables carPrice and priceAfterOneYear.

// d) Identify all the lines that are variable declarations
// Lines 1, 2, 7 and 8 are variable declarations because they are declaring new variables with the keywords 'let' or 'const' 

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// This expression removes all commas from the strings 'carPrice' and 'priceAfterOneYear', then converts the strings into number format. The purpose is to enable mathematical calculations because numbers in a string can't be used in arithmetic operations directly.
