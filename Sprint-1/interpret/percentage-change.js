let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
`2`

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
`There wasnt any comma between the 2 quotes. I added a comma.`

// c) Identify all the lines that are variable reassignment statements
`carPrice = Number(carPrice.replaceAll(",", ""));
 priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));`

// d) Identify all the lines that are variable declarations
`let carPrice = "10,000";
 let priceAfterOneYear = "8,543";`

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
`This part of the expression removes all commas from the string stored in the variable carPrice`