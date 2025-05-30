let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

/*
There are 3 function calls in this file:
Line 4 and 5 - Number() and replaceAll() (although replaceAll() is technically a method (is a property of a string object) it is still a function call)
line 10 - console.log() (although log() is technically a method (is a property of the console object) it is still a function call)
*/

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

/*
The line where the error is coming from is line 5. It has a "SyntaxError: missing ) after argument list" . The error is thrown at 5:60 because there is a space between the comma and the closing quotation mark in the replaceAll() method. The correct line (if we look at line 4 where the method is also used, it should be:
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
*/

// c) Identify all the lines that are variable reassignment statements
/*
Lines 4 and 5 are reassignment statements as they are reassigning the values of the variables carPrice and priceAfterOneYear to new values after converting them. (The commas from the strings are removed, the clean strings are then converted to numbers using the Number() function and then they are reassigned to the same variables.)
*/

// d) Identify all the lines that are variable declarations

/*
Lines 1 and 2 and 7 and 8 are variable declarations, as "let" and "const" are used to declare the variables carPrice, priceAfterOneYear, priceDifference, and percentageChange. The 'let" declaration means that the variable can be reassigned later, while "const" means that the variable cannot be reassigned after its initial declaration.
*/

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

/*
The expression Number(carPrice.replaceAll(",", "")), as noted earlier, is converting the string value of carPrice (which is "10,000") into a number by first removing ALL the commas using the replaceAll() method, and then converting the cleaned string ("10000") into a number using the Number() function. The purpose of this expression is to ensure that carPrice is stored in a number value format rather than a string, meaning that the mathematical operations are able to then be performed on it.
*/