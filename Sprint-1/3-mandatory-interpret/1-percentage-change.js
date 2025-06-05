let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 3 function calls in this file: carPrice.replaceAll(",", "") , priceAfterOneYear.replaceAll(",", "") ,  console.log()


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//  The error is due to a missing comma in the replaceAll method call.
// To fix the error we need to add a comma in the replaceAll method call.

// c) Identify all the lines that are variable reassignment statements
// The variable reassignment statements are: carPrice , priceAfterOneYear, priceDifference, percentageChange.

// d) Identify all the lines that are variable declarations
// The variable declarations are: let carPrice, let priceAfterOneYear, const priceDifference, const percentageChange.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//The expression Number(carPrice.replaceAll(",", "")) is converting the string value of carPrice, which contains a comma, into a number by removing the comma and then converting the resulting string to a number type. 
