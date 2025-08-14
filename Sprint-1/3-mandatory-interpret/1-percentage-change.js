let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// priceDifference and percentageChange,  line 4-5
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//line 5, missing ,
// c) Identify all the lines that are variable reassignment statements
//line 1 and line 2
// d) Identify all the lines that are variable declarations
//line 7 and line 8 
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// remove the , for example, 10,000 change to 10000