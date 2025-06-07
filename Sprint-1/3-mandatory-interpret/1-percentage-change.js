let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// line 4 has a function call Number(carPrice.replaceAll(",", ""))
//line 5 has a function call Number(priceAfterOneYear.replaceAll(",",""))

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//line 5 has a error syntaxerror-- we did not add a comma to indicate the second argument for the function. we can rectify by adding a comma
// after the the first double quote

// c) Identify all the lines that are variable reassignment statements
//line 4 and line 5 are variable reassignments

// d) Identify all the lines that are variable declarations
//variable declarations are on line 1,2 and lines 7,8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// the purpose of this line is to replace all instances of "," with an empty string
