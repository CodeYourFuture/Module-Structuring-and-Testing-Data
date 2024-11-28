let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
    //~There are 4 function calls in total, line 4 and 5 each have two functions calls.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    //~The error was in line 5 specifically in the replaceAll("," ""), there should have been a comma separating the value being replaced with the value replacing it.

// c) Identify all the lines that are variable reassignment statements
    // Variable reassignment statement are in line 4 and 5.

// d) Identify all the lines that are variable declarations
    // Variable declarations are in line 1, 2, 7, and 8.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    //The purpose of that operation is to remove all the occurances of the comma in the string carPrice with nothing, and then turn the resultant value as a number.