let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?


/* 
a) There are 3 Function calls in this file and they were made in lines 4, 5 and 10

b) The error is coming from line 5
Type of error is SyntaxError: missing ) after argument list
The function call replaceAll("," "") is missing a comma between arguments. 
It should be written as replaceAll(",", "")

c) Lines that are variable reassignment statements are: lines 4 and 5
The existing variables were assigned new values

d) Lines that are variable declarations are: lines 1, 2, 7, and 8

e) The expression Number(carPrice.replaceAll(",","")) is used for converting a formatted string that contains commas into a numerical value so it can be used in mathematical calculations
carPrice.replaceAll(",", ""): The replaceAll function removes all commas from the string "10,000", resulting in "10000".
Number("10000"): The Number function converts the string "10000" into a numeric value 10000.