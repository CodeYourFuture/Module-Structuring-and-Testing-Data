let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);


// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
 //there are 5 functions calls in line 4, 5 and 10
 //carPrice = Number(carPrice.replaceAll(",", ""));: Number(), replaceAll()
 //priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));:Number(), replaceAll()
 //console.log(`The percentage change is ${percentageChange}`); :console.log()
 
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
  //The error was coming from line 5:
  //priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
  //The error occurred because there was a missing comma between the two arguments inside the replaceAll() function.
  //To fix the problem, we add the missing comma: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
// c) Identify all the lines that are variable reassignment statements
   // Line 4: carPrice = Number(carPrice.replaceAll(",", ""));
  // Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
// d) Identify all the lines that are variable declarations
  // Line 1: let carPrice = "10,000"; 
  // Line 2: let priceAfterOneYear = "8,543";
  // Line 7: const priceDifference = carPrice - priceAfterOneYear;
  // Line 8: const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
   // The expression Number(carPrice.replaceAll(",", "")) first removes all commas
   // from the string stored in carPrice using replaceAll().
  // For example, "10,000" becomes "10000".
  // Then Number() converts the cleaned string into a numeric value.
  // The purpose of this expression is to convert a formatted string price
  // into a number so that mathematical calculations can be performed.
