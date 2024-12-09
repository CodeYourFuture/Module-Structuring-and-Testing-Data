let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);
console.log(carPrice)

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
    //there are 5 function calls. These are in line 4,5,10.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    // the error was coming from line 5, there was no , between the two arguments.

// c) Identify all the lines that are variable reassignment statements
    // line 4 and 5.

// d) Identify all the lines that are variable declarations
    //line 1, 2, 7, 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    //The purpose is to convert the string value to numerical value, so that it can be evaluated.
    //The expression replaces , with nothing "" then converts to number.
