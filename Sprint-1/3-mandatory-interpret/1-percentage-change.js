let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// ====> Function calls occur on lines 4 and 5 (Number() and replaceAll()), and on line 10 (console.log()).

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// ====> error is coming from line 5. The error is because of not putting comma between the parameter of replaceAll function. 
// To fix the problem, add a comma between the two arguments of the replaceAll function, since this method requires two parameters.

// c) Identify all the lines that are variable reassignment statements
// ===> Line 4 (carPrice) and line 5 (priceAfterOneYear).

// d) Identify all the lines that are variable declarations
// ====> we have variable declarations at lines 1, 2 with let and with const at line 7 and 8.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// ===> the purpose of that expression is to remove all commas from the string "1,000" to "1000" and turn the string into number "1000" to 1000.