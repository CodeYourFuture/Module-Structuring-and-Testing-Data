let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// There are 3 function calls. line 4 Number() and .replaceAll()
// line 12 console,log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//A syntaxError is occurring on line 5, we are missing a "," and a closing ")"

// c) Identify all the lines that are variable reassignment statements
// line 4 and 5

// d) Identify all the lines that are variable declarations
// line 1, 2, 7, 8
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/* We are removing the comma, the replaceAll method takes in two arguements, 1 for what to replace and 2 for what to
replace by, and in this case we are replaceing the comma with an empty string. we wrap the carPrice variable which is a string
with the Number() function to convert it into a number*/