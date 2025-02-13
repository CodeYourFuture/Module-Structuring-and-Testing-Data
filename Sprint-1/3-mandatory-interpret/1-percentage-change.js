let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//     4 , two in line 4 and 2 in line 5.
//     Number()
//     replaceAll()
//     Number()
//     replaceAll()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//  we have syntax error on line 5 and i have added , in side the bracket to separate "," and "".
// In line 5 it was this => priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

// c) Identify all the lines that are variable reassignment statements
// line 4 and 5 are reassignments
//carPrice = Number(carPrice.replaceAll(",", ""));    AND
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));


// d) Identify all the lines that are variable declarations
// line 1,2,7 and 8 are variable declarations.
//let carPrice = "10,000";
//let priceAfterOneYear = "8,543";
//const priceDifference = carPrice - priceAfterOneYear;
//const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//it is replacing the characters in the string specified in the bracket to make them numbers.
//example in --- let carPrice = "10,000";  ---carPrice = Number(carPrice.replaceAll(",", ""));
//we replace , and "" from carPrice and store the numeric value of 10000