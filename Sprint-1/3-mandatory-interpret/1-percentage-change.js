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

priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

// a) there are 5 function calls in this file,// Line 4: replaceAll(",", "") and Number()
// Line 5: replaceAll(",", "") and Number()
// Line 9: console.log()

// b) The error is coming from line 4 and line 5.  
// The error occurred because a comma was missing between the arguments while redefining priceAfterOneYear variable at line 4 and 24.(",", "")
//  To fix this problem, we need to put comma between the arguments or we can remove the commas from the strings before converting them to numbers. 

// c) The variable reassignment statements are on line 4 and line 5, where carPrice and 
// priceAfterOneYear are being reassigned to the result of the Number() function.

// d) The variable declarations are on line 1 and line 2, where carPrice and priceAfterOneYear are declared and initialized with string values.

// e) The expression Number(carPrice.replaceAll(",","")) is doing the following:
// 1. This part of the expression takes the string value of carPrice (which is "10,000") and removes all comma, resulting in the string "10000".
// 2. Number(...): This part takes the resulting string "10000" and converts it into a number (10000). 

