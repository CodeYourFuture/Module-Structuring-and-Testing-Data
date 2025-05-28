let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// Function calls in this file: 5
// 1. carPrice.replaceAll(",", "") [line 4]
// 2. Number(carPrice.replaceAll(",", "")) [line 4]
// 3. priceAfterOneYear.replaceAll(",", "") [line 5]
// 4. Number(priceAfterOneYear.replaceAll(",", "")) [line 5]
// 5. console.log(`The percentage change is ${percentageChange}`); [line 10]


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// add missing comma between the two arguments inside replaceAll
// priceAfterOneYear.replaceAll(",","") [line 5]

// c) Identify all the lines that are variable reassignment statements

// Variable reassignment statements: 2
// 1. carPrice = Number(carPrice.replaceAll(",", "")); [line 4]
// 2. priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",","")); [line 5]


// d) Identify all the lines that are variable declarations

// Variable declarations: 4
// 1. let carPrice = "10,000"; [line 1]
// 2. let priceAfterOneYear = "8,543"; [line 2]
// 3. const priceDifference = carPrice - priceAfterOneYear; [line 7]
// 4. const percentageChange = (priceDifference / carPrice) * 100; [line 8]

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// Firstly, carPrice.replaceAll(",", "") removes all commas from the string
// Then Number(...) converts the resulting string into a number type so it can be used in arithmetic
