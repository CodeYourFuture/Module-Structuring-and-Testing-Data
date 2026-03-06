let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

//There are 5 function call in this code.
// 1. Line 4 has 2 function call, .replaceAll() and Number()
//2. Line 5 ditto line 4
// 3. line 10 console.log() that logs the result to the console

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The error in this code is coming from line 5. The wrong use of the
// replaceAll method without a comma between the pattern and replacement in the function  argument.
// I will fix this problem by reading the documentation, to see the right way the syntax should be written.
//Then i will add the comma where necessary

// c) Identify all the lines that are variable reassignment statements
// line 4 and 5 are variable reassignment

// d) Identify all the lines that are variable declarations
// line 1,2,7,8 are all variable declaration

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// this expression replaces the comma at the string with an empty string and the convert the string data type to a number data type
