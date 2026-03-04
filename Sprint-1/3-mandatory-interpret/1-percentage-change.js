let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const PriceDifference = carPrice - priceAfterOneYear;
const PercentageChange = (PriceDifference / carPrice) * 100;

console.log(`The percentage change is ${PercentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// there are 4 function calls in this file.
carPrice.replaceAll(",", "")
priceAfterOneYear.replaceAll(",", "")
Number(carPrice.replaceAll(",", ""))
Number(priceAfterOneYear.replaceAll(",", ""))


// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// the error is comin from this line 

priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// the error happens becuae there is missing comma inside reaplaceAll().
//The correct line should be 
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable reassignment statements
// This lines 
carPrice = Number(carPrice.reaplaceAll(",", ""));

// d) Identify all the lines that are variable declarations
let carPrice = 10,000";
let priceAfterOneYear = "8,543";
const priceDifference = carPrice - priceAfterOneyear;
const percentageChange = (priceDifference / carPrice) * 100;


// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
Number(carPrice.replaceAll(",", ""))
// It removes commas from the number string and converts the results into  a real number so calculation can be done.