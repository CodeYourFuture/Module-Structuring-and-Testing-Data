let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

 // Function calls = code that ends with (...).
    carPrice = Number(carPrice.replaceAll(",", ""));
    priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
    const percentageChange = (priceDifference / carPrice) * 100;
    console.log(`The percentage change is ${percentageChange}`);

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

   priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

//  -The error is coming from line 4 as a SyntaxError.
//  -The error happens because replaceAll expects two arguments — what to replace, 
//  -and what to replace it with. A comma is missing between them, 
//  -so JavaScript gets confused and sees an invalid string.
//  - It can be fixed by adding the missing comma between the arguments
//  - Here is the fixed code.
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable reassignment statements
// Line 3 – carPrice = …
let carPrice = "10,000";
carPrice = Number(carPrice.replaceAll(",", ""));
// The first line of code is a variable declaration - declaring the variable carPrice and assigning it an initial value ("10,000").
// The second line of code is the reassignment - it holds a number instead of a string.

// Line 4 – priceAfterOneYear = …
// Same logic for line 2 and line 4.
let priceAfterOneYear = "8,543"; 
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
//    Line 1 – let carPrice = …
//    Line 2 – let priceAfterOneYear = …
//    Line 5 – const priceDifference = …
//    Line 6 – const percentageChange = …


// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Number(carPrice.replaceAll(",", "")) removes commas from the price string and 
// converts it into a number, allowing arithmetic operations.
