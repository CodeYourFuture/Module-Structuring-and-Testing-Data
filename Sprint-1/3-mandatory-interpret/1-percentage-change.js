let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

/*
a) There are 5 at: 1)carPrice = Number(carPrice.replaceAll(",", "")); & 2)priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," "")),
3) & 4) const priceDifference = carPrice - priceAfterOneYear; 5) const percentageChange = (priceDifference / carPrice) * 100;

b) The error happened due to the missing comma "," in between the 2 parameters/arguments in line 5's function call. Just add a comma to solve
this problem.

c) line 4 & line 5

d) line 1 & line 2

e) The last expression gets rid of all the commas present in the declared variables in line 1 & 2. or in other words, replaces them commas with
no space between the characters separated by the commas. 
*/
