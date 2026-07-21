let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) 5 function calls: replaceAll and Number on line 4, replaceAll and Number on line 5, console.log on line 10.

// b) The error is on line 5. There is a comma missing between the two arguments of replaceAll, it should be replaceAll(",", "") not replaceAll("," "").

// c) Lines 4 and 5 are variable reassignment statements.

// d) Lines 1, 2, 7, and 8 are variable declarations.

// e) Number(carPrice.replaceAll(",", "")) removes the commas from the string using replaceAll, then Number() converts that string into an actual number so maths can be done with it.
