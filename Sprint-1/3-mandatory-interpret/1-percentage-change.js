let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below:

// a) How many function calls are there in this file? Write down all the lines where a function call is made: Thete are 5 functions- 2 on line 4, 2 on line 5 and 1 on line 10

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem? line 5, a comma is needed

// c) Identify all the lines that are variable reassignment statements- line 4 and line 5

// d) Identify all the lines that are variable declarations: Line 1, Line 2, Line 7 and Line 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - What is the purpose of this expression? This expression removed the comma in the number and convert the string into a number