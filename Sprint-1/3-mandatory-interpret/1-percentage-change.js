let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// 3 functions:
// carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// const percentageChange = (priceDifference / carPrice) * 100;

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//Error was in line 5 missing a coman between the get to replace ""

// c) Identify all the lines that are variable reassignment statements
// lines 4, 5 

// d) Identify all the lines that are variable declarations
// lines 1 and 2 , 7 and 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// it is converting the numbers prices to real numbers replace the commnas to empty string so takrs the commans out