let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made there are 4 function calls in total.
// Function calls: line 4 has a Number method call which converts a given value to a number if possible. 
//line 4 also has a replaceAll method call which replaces all occurrences of a specified substring with another given substring.
// Line 5 has a Number method call which converts a given value to a number if possible.
// Line 5 also has a replaceAll method call which replaces all occurrences of a specified substring with another given substring.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem? the error is occurring because there is a missing comma in the replaceAll method call on line 5. this separates the first argument from the second argument. 
// this can be fixed by adding a comma between the two arguments in the replaceAll method call on line 5.

// c) Identify all the lines that are variable reassignment statements, line 4 and 5 

// d) Identify all the lines that are variable declarations, lines 1,2,7,8.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression? this expression is converting the the string value of of carPrice into a number by first removing all the commas in the string to ensure it is in a format that can be converted to a number.
