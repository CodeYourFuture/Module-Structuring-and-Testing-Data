let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 5 calls

/*
    Two separate calls:
    carPrice.replaceAll(",", "")
    priceAfterOneYear.replaceAll(",", "")

    Two separate calls:
    Number(carPrice.replaceAll(",", ""))
    Number(priceAfterOneYear.replaceAll(",", ""))

    One seperate call:
    console.log(...)
*/


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//Line 5, syntax error. To fix it just put a comma after the replacement pattern with an empty string

// c) Identify all the lines that are variable reassignment statements
// Line 4,5,7,8

// d) Identify all the lines that are variable declarations
//Line 1,2,7,8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// converted a string into number by replacing the comma with an empty string to allow for mathematical operations

