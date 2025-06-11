let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?


a) 5 total function calls
carPrice.replaceAll(",", "")

Number(...) on the result of #1

priceAfterOneYear.replaceAll("," "") ❌ (this is broken — see part b)

Number(...) on the result of #3 (also broken)

console.log(...)

b)This line has a syntax error: there's an extra quote in replaceAll("," "")
It should be: replaceAll(",", "")

c) carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
 These 2 lines are reassignments — the values are being updated after declaration.

 d)This is a nested expression that does two things:

 carPrice.replaceAll(",", ""):
 
 Replaces all commas with empty strings.
 
 Example: "10,000" → "10000" (makes it usable as a number)
 
 Number(...):
 
 Converts the resulting string "10000" into the actual number 10000
 
 

