let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
4 times : 2 times function Number() and  2 times function replaceAll() are called.
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
SyntaxError: Unexpected token, expected "," (70:60) 
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
The error occured in line 70 because of missing , between arguments of replaceAll function and we can fix it with put , like this line :
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
// c) Identify all the lines that are variable reassignment statements
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// d) Identify all the lines that are variable declarations
let carPrice = "10,000";
let priceAfterOneYear = "8,543"
const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
first replace all ","s with "" : means removing , from the value of carPrice variable
secondly change the value type of  carPrice variable to number in order to do mathematical operations
 
