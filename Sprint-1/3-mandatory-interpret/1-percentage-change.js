let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// Martin answer - functions calls are on lines - 4, 5 with the use of the Number function

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// Martin answer - There is a syntax error on line 5, comma missing between current item and replacement item in replaceAll method

// c) Identify all the lines that are variable reassignment statements

// Martin answer - lines 4 and 5

// d) Identify all the lines that are variable declarations
// Martin answer - lines 1, 2, 7 and 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

/*
Martin answer - the purpose of this expression is to use the replaceAll method using a search string and replacement string. In this case all commas are removed from carPrice (",") and replaced with a blank (""), converting the formatted number of "10,000" to "10000". This is passed into a Number() method which converts the string to a number - 10000
*/
