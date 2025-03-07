let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//5 function calls:Line 4 → replaceAll(",", "")
//Line 4 → Number()
//Line 6 → replaceAll(",", "") 
//Line 6 → Number()
//Line 10 → console.log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//The error is on line 5:priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
//The function call replaceAll(",", "") is incorrect because there is an extra double quote inside replaceAll(), making it invalid syntax.
//The correct syntax is:priceAfterOneYear.replaceAll(",", "")

// c) Identify all the lines that are variable reassignment statements
//line 4:carPrice = Number(carPrice.replaceAll(",", "")); and line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));


// d) Identify all the lines that are variable declarations
// line 1:let carPrice = "10,000"; line 2:let priceAfterOneYear = "8,543"; line 7: const priceDifference = carPrice - priceAfterOneYear;
//line 8:const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//carPrice.replaceAll(",", "") -This removes all commas from the carPrice string.Number() converts string into a number.
//The purpose of Number(carPrice.replaceAll(",", "")) is to convert a string representing a price into a numerical value that can be used for calculations.