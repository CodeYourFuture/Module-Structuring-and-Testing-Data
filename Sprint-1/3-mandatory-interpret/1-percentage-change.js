let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
line 4 and 5

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
The error is coming from line 5, I think it is because there is no comma after the first quotation marks. I can fix 
it by adding the comma between the two quotation marks.

// c) Identify all the lines that are variable reassignment statements
line 7 and 8

// d) Identify all the lines that are variable declarations
line 1 and 2

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
It is removing the commas from the String, making the number easier to read