let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," , ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);
console.log(carPrice)
// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
    // There is 3 functions in this file: 1. carPrice.replaceAll(",", "")  2. (priceAfterOneYear.replaceAll("," "") 3. ${percentageChange}
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    // The error is in line 5. The error happen because the comma missing and can fix it through add the comma.
// c) Identify all the lines that are variable reassignment statements
    // Line 4,5,7 and 8.
// d) Identify all the lines that are variable declarations
    // Line 1,2,4,5,7 and 8.
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    // Remove the comma that in the value.