let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// There are five functions calls.
//carPrice.replaceAll(",", "")
//Number(carPrice.replaceAll(",", ""))
//priceAfterOneYear.replaceAll("," "")
//Number(priceAfterOneYear.replaceAll("," ""))
//console.log(`The percentage change is ${percentageChange}`)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// When I run the code the error is "syntaxError: missing ) after argument list.
// The error comes from line 5
// The error occurs due to the missing coma between the two strings in the replaceAll() call.
// Add coma between the two strings "priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));"

// c) Identify all the lines that are variable reassignment statements

// there are to lines that state variable reassignment
// carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

// d) Identify all the lines that are variable declarations

// There are fore variable declarations (line 1, line 2, line 7, line 8)
// let carPrice = "10,000";
// let priceAfterOneYear = "8,543";
// const priceDifference = carPrice - priceAfterOneYear;
// const percentageChange = (priceDifference / carPrice) * 100;


// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// carprice at line 1 is a string in order to calculate for the next line of codes you have to change the string ti number.
// carPrice.replaceAll(",","")). delete the coma in between the number (e.g from "10,000" to "10000")
// number() change the string to number ("10000" to 10000)
