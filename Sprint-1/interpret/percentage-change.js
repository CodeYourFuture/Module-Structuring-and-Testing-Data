let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//Answer: There are 4 function calls as below:
//1-Number(carPrice.replaceAll(",", ""));
//2-Number(priceAfterOneYear.replaceAll("," ""));
//3-(priceDifference / carPrice) * 100;
//4-console.log(`The percentage change is ${percentageChange}`);


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//Answer:
//The error occurs on line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));.
//The error occurs because there’s a missing comma between the "," and "" in the replaceAll call. It should be priceAfterOneYear.replaceAll(",", "").

// c) Identify all the lines that are variable reassignment statements
//Answer: lines 4 and 5

// d) Identify all the lines that are variable declarations
//Answer: lines 1, 2, 7, 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//Answer: It Removes commas from the carPrice string, so "10,000" becomes "10000".
//then it Converts the result of  string "10000" into a number, so carPrice becomes 10000.
//This lets us do arithmetic calculations with carPrice as a number instead of a string.