let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," "")); missing ,
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", "")); 

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//5
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// 4
// c) Identify all the lines that are variable reassignment statements
// 4, 6
// d) Identify all the lines that are variable declarations
// 1, 2, 8, 9
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// replace all instances a , with ""