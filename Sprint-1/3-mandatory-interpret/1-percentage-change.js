let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 5 function calls in this file. They occur on the following 3 lines:
// carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// console.log(`The percentage change is ${percentageChange}`);

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// The code contains one syntax error on the following line:
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// A comma is missing between the arguments inside replaceAll(). It should be:
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable reassignment statements
// The lines that are variable reassignment statements are as follows:
// carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

// d) Identify all the lines that are variable declarations
// The lines that contain variable declarations are as follows:
// let carPrice = "10,000";
// let priceAfterOneYear = "8,543";
// const priceDifference = carPrice - priceAfterOneYear;
// const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// It removes the comma from the car price string and converts it into a number so it can be used in calculations.