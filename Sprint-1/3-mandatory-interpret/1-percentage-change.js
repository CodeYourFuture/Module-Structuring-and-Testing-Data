let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," , ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//There are five function calls here. "replaceAll" on line 4 and 5 which replaces every "," with an empty space, therefore removing the comma. 
// We equally have console.log which prints out on line 10.
//The last function is Number() on line 4 and 5 which changes everything in it into a number/integer. Here, it changes String to numbers. 

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//Line 5 was missing a separation comma.

// c) Identify all the lines that are variable reassignment statements
// Line 4 and Line 5 have variables being reassigned.

// d) Identify all the lines that are variable declarations
//Line 1, line 2, line 7 and line 8 have variable declarations
// Here, we have declared variables by using let and const. We have variable called carPrice, priceAfterOneYear, priceDifference and percentageChange.
// We have given values to these variables as well which can be seen after the equals sign.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//This expression removes the comma in the price from 10,000 to 10000
//Here, every time the function reads a comma (","), it replaces the comma with "" which is basically an empty space. In other words, it removes the comma in a expression
