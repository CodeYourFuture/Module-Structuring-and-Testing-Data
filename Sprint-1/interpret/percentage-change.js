let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
 
//answers

//  a)
//on line 4, carPrice.replaceAll(",", ""), replaceAll is called on carPrice to remove the commas.
// on line 4, Number is called to replace the results of replaceAll to a number, cause they were strings.
// on line 5, priceAfterOneYear.replaceAll("," ""), replaceAll is called on priceAfterOneYear to remove thee comas.
// on line 5, Number is called to replace the results of replaceAll to a number, cause they were strings.
// on line 10, console.log(`The percentage change is ${percentageChange}`);, console.log is called to print the percentage.

//  b) the error is in line 5, priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," "")); a comma is missing between the two strings, the correct one is priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

//  c) in line 4 and 5 the variables carPrice and priceAfterOneYear are replaced to a new values. first they are both strings with commas now they are numbers.

//  d) in javascript let and const are used to declare variables, so in the above code we  have 4 declared variables: carPrice, priceAfterOneYear,  priceDifference and  percentageChange.

//  e) Number(carPrice.replaceAll(",","")): lets break it down. first the expression replaceAll(",","") is removing the comma (it was "10,000", now it is "10000"). and the second expression Number(carPrice.replaceAll(",","")) is changing the string to number(it was "10000" now it is 10000 )