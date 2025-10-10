let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//after running the code I found 5 function calls
//line 1: replaceAll
//line 2: replaceAll
//line 4: Number
//line 5: Number
//line 8: console.log
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// after running the code i found an error in line 5 missing a comma in the replaceAll method to fix it I have added the comma

// c) Identify all the lines that are variable reassignment statements
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));


// d) Identify all the lines that are variable declarations
let carPrice = "10,000";
let priceAfterOneYear = "8,543";
const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Fist the car price is a string so we can't do any calculation on it yet 
//so first we remove all the comma by using replaceAll method then we convert it to a number by using Number method