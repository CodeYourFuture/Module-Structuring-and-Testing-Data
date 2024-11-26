let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//There are 5 function calls
//carPrice = Number(carPrice.replaceAll(",", ""));
//Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
//Number(priceAfterOneYear.replaceAll("," ""));
//console.log(`The percentage change is ${percentageChange}`);


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
//The issue is a missing comma between the arguments in replaceAll(). 
//It should be: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));


// c) Identify all the lines that are variable reassignment statements
//carPrice = Number(carPrice.replaceAll(",", ""));
//priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));


// d) Identify all the lines that are variable declarations
//let carPrice = "10,000";
//let priceAfterOneYear = "8,543";
//const priceDifference = carPrice - priceAfterOneYear;
//const percentageChange = (priceDifference / carPrice) * 100;


// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//The expression first removes all commas from the string carPrice using replaceAll(",", ""), 
//then converts the result into a number using Number(). 
//This is done to ensure the price is in a numerical format.