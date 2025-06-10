let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
    // Anwer: The function is called 4 times in the code line 7 and 8 then we have the built-in functions line 4 and 5

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    // Answer: The error is coming from line 5 a comma is missing between the quotes '(priceAfterOneYear.replaceAll("," ""))'

// c) Identify all the lines that are variable reassignment statements
    // Answer: Line 4 and 5

// d) Identify all the lines that are variable declarations
    // Answer: Line 1, 2, 7 and 8 

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    // Answer: It removing all the commas and also converting the values to a number
