let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

//5 functions
//Number(carPrice.replaceAll(",", ""));
//replaceAll(",", "")
// Number(priceAfterOneYear.replaceAll("," ""))
//replaceAll("," "")
//console.log(`The percentage change is ${percentageChange}`)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//SyntaxError: missing ) after argument list. priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

// c) Identify all the lines that are variable reassignment statements
//2 times
//carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

// d) Identify all the lines that are variable declarations
//4 times. lines which has Let and const.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// it removes the "," which is in between the 10,000 and make it "10000", same for "8543"
//Number changes the type of strings to a numbers
