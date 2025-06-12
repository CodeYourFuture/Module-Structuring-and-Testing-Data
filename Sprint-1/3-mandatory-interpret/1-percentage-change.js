let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
A; Here are all the function calls:
1; carPrice.replaceAll(",", "")
2; Number(...) around that
3; priceAfterOneYear.replaceAll(",", "")
4; Number(...) around that
5; console.log(...)
In the result, Total = 5 function calls
(Technically, 3 direct function calls and 2 nested inside Number())

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
A; The error is coming from this line priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
because  the second argument in replaceAll(), has forgotten. So JavaScript throws a syntax error.
I can fix it by adding a comma between the arguments in replaceAll(). It should be: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
// c) Identify all the lines that are variable reassignment statements
A; These are reassignment (changing the value of an existing variable):
1- carPrice = Number(carPrice.replaceAll(",", ""));
2- priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
// d) Identify all the lines that are variable declarations
A; d) Variable declaration statements
These are declarations (introducing new variables with let or const):
1- let carPrice = "10,000";
2- let priceAfterOneYear = "8,543";
3- const priceDifference = carPrice - priceAfterOneYear;
4- const percentageChange = (priceDifference / carPrice) * 100;
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
This expression does two things:
1. carPrice.replaceAll(",", ""):
Removes all commas from the string "10,000" → becomes "10000".
2. Number(...):
Converts the cleaned string "10000" into a number → becomes 10000.
 Purpose: Convert "10,000" (a string with commas) into the number 10000.

