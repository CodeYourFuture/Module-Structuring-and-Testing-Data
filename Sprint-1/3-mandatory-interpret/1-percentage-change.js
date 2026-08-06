let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) There are 5 function calls.
// Line 4: carPrice.replaceAll(",", "")
// Line 4: Number(...)
// Line 5: priceAfterOneYear.replaceAll(",", "")
// Line 5: Number(...)
// Line 10: console.log(...)

// b) There is no error in the current code because it has already been fixed.
// The original error occurred because a comma was missing between the arguments in a function call.
// The missing programming term is "arguments".
// Adding the missing comma fixes the syntax error.

// c) Variable reassignment statements:
// Line 4: carPrice = Number(carPrice.replaceAll(",", ""));
// Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Variable declarations:
// Line 1: let carPrice = "10,000";
// Line 2: let priceAfterOneYear = "8,543";
// Line 7: const priceDifference = carPrice - priceAfterOneYear;
// Line 8: const percentageChange = (priceDifference / carPrice) * 100;

// e) The expression Number(carPrice.replaceAll(",", "")) first removes the comma from the string "10,000", producing "10000". It then converts that string into the number 10000 so it can be used in mathematical calculations.