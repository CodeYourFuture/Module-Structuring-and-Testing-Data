let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are  three; Ln4, Ln5, Ln10.
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// the error is as a result of the two arguments in Ln5 not being seperated
// c) Identify all the lines that are variable reassignment statements
// Ln4, Ln5,
// d) Identify all the lines that are variable declarations
// Ln1, Ln2, Ln7 and Ln8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// The purpose is to take replace the commas in the number with "nothing" so that 
// the number string can be converted to an actual number. 