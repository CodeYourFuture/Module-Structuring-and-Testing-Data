let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// We have four function calls Line #4 ,Line#5, Line #8, Line #10

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// When we run the code it shows an error in line #5 , it's a syntax error.we have to put comma in the the place of the argument.


// c) Identify all the lines that are variable reassignment statements
//Line four and line five are the variable reassignments, they are reassigned a new value after they already have been declared.

// d) Identify all the lines that are variable declarations
//line # 1,2.7,8  are the variable declarations.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//The expression in line #4  carPrice.replaceAll(",", "")  removes all commas from "10,000", resulting in "10000", 
//and Number("10000") changes the string into a number,
//Reassigns the carPrice variable 10000 a number not a string.
//The purpose of this expression is to change the value of the variable carPrice from a string to a number 
// after  our code get executed we get a number not a string.