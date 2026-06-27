let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 5 function calls. carPrice = Number(carPrice.replaceAll(",", ""));
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
// In the above 2 lines, 2 replaceAll() functions for carPrice and priceAfterOneyear and after executing them again Number() 
// functions for the 2 variables.
// At last, console.log() function for printing the executed value.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// after running the code, the error is coming from this line priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));and
// the error is  SyntaxError: missing ) after argument list. There is a comma missing in replaceAll() syntax. It should be
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));  

// c) Identify all the lines that are variable reassignment statements
// There are 2 variable reassignment statements. 
// const priceDifference = carPrice - priceAfterOneYear;
// const percentageChange = (priceDifference / carPrice) * 100;

// d) Identify all the lines that are variable declarations
// There are 4 variable declarations lines. 
// let carPrice = "10,000";
// let priceAfterOneYear = "8,543";

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Firstly this expression replace all the commas from the variable carPrice = "10,000" to "10000" and then it converts 
// string "10,000" to number 10000.