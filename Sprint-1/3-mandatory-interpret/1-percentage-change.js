let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Line 4 and 4 has two function calls Number() and replaceAll()
// -  line 10 has a function console.log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// Line 5- 
// priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
//                                                         ^^^
// SyntaxError: missing ) after argument list

// c) Identify all the lines that are variable reassignment statements
// carPrice an priceAfterOneYear - lines 4 and 5

// d) Identify all the lines that are variable declarations
//Lines - 1, 2, 7, 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// replaceAll() removes all occurrence of commas from the string e.g "10,000" becomes "10000" and the Number() wrapper converts 
// the string to number type; "10000" becomes 10000

