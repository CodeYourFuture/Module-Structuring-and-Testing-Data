let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// There are 5 function calls in this file:
// line 4: carPrice.replaceAll(",", "")
// line 4: Number(carPrice.replaceAll(",", ""))
//line 5: priceAfterOneYear.replaceAll("," "")
// line 5: Number(priceAfterOneYear.replaceAll("," ""))
// line 9: console.log(`The percentage change is ${percentageChange}`)



// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
/*
 It's a SyntaxError in line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));.
 The error is occurring because there is a missing comma between the two arguments of the replaceAll function here ("," "").
 To fix this problem, we need to add a comma between the two arguments: replaceAll(",", "").
 */



// c) Identify all the lines that are variable reassignment statements
/*reusing the same variable carPrice but updating its value:
carPrice = Number(carPrice.replaceAll(",", ""));

reusing the same variable priceAfterOneYear but updating its value:
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
*/



// d) Identify all the lines that are variable declarations
/*declaring a new variable carPrice:
let carPrice = "10,000";

declaring a new variable priceAfterOneYear:
let priceAfterOneYear = "8,543";
*/



// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/*
The expression Number(carPrice.replaceAll(",", "")) is converting the carPrice string into a number.
The purpose of this expression is to get a numeric value for carPrice that can be used for calculations.
*/
