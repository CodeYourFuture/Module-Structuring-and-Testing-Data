let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

//a) There are 4 function calls in this file. They are on lines 1, 2, 4, and 5.
//b) The error is on line 5. The error is occurring because a comma is messing between the parameters., 
// but the string has not been converted to a number.
//c) The variable reassignment statements are in lines 4 and 5
//d) The variable declarations are in lines 1,2,7, and 8.
//e) The expression Number(carPrice.replaceAll(",","")) is converting the string carPrice into a number
// by removing the commas and then converting the resulting string into a number. from "10,000" to "10000" to 10000

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
