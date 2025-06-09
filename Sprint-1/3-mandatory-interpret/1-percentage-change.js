let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//    There are 5 function calls in this file
//    In line 4: carPrice = Number(carPrice.replaceAll(",", "")); 2 function calls; replaceAll() and Number().
//    In line 5:  priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," "")); 2 function calls; replaceAll() and Number.
//    In line 10: console.log(`The percentage change is ${percentageChange}`); 1 function call; console.log().

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//    There is a TypoError in line 5. it can be fixed by adding ',' to the replaceAll() function.

// c) Identify all the lines that are variable reassignment statements
//    Variable reassignment taken place in line 4 and line 5.

// d) Identify all the lines that are variable declarations
//    Variable declaration takes place in
//    line 1, line 2, line 7, and line 8.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//    carPrice.replaceAll(",", "") removes all commas from the string.
//    Number(...) converts a string into a number.
