let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//  There are 3 function calls in this file. The Number() constructor is called twice on lines 4 and 5. On line 10 console.log() is also called

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// /home/kris/Code/CYF/ITP/Module-Structuring-and-Testing-Data/Sprint-1/3-mandatory-interpret/1-percentage-change.js:5 <-- this indicates the error is on line 5
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
//                                                         ^^^ <-- This highlights where the error is in the line. In this case the computer stops reading the code at the highlighted part because we are missing a comma after that

// c) Identify all the lines that are variable reassignment statements
//  carPrice is reassigned at line 4 and priceAfterOneYear is reassigned at line 5

// d) Identify all the lines that are variable declarations
// Line 1 (carPrice), line 2 (priceAfterOneYear), line 7 (priceDifference) and line 8 (percentageChange)

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The replaceAll() method replaces one or more characters of a string with something different. In this case, the method just removes the comma, because the replacement value is an empty string
