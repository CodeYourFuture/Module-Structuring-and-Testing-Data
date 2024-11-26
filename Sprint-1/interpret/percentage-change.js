let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

//console.log(`The percentage change is ${percentageChange}`);
console.log(carPrice)
// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 5 function calls
// 1. Number(carPrice.replaceAll(",", "")); Line 4
// 2. carPrice.replaceAll(",", "")); Line 4
// 3. Number(priceAfterOneYear.replaceAll("," ""));  Line 5
// 4. priceAfterOneYear.replaceAll("," ""));  Line 5
// 5. console.log(`The percentage change is ${percentageChange}`); Line 10

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error is coming fron Line 5. There was a missing separator(,) between the parameter for the method replaceall().

// c) Identify all the lines that are variable reassignment statements
// Lines 4 and 5

// d) Identify all the lines that are variable declarations
// Line 1, 2, 7 and 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// It takes 2 strings as argument separated by comma. It replaces left argument by the right argument. In this example, it replaces the comma sign with 10,000
