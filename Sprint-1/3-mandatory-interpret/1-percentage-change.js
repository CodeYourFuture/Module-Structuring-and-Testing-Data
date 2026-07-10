let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
there are 4 function calls in this file. 
The lines where a function call is made are:

1. carPrice.replaceAll(",", "")
2. Number(carPrice.replaceAll(",", ""))
3. priceAfterOneYear.replaceAll("," "")
4. Number(priceAfterOneYear.replaceAll("," ""))

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
the error is coming from the line:
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

The error is occurring because there is a missing comma in the replaceAll method. The correct syntax should be:

priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable reassignment statements
The lines that are variable reassignment statements are:
1. carPrice = Number(carPrice.replaceAll(",", ""));
2. priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) Identify all the lines that are variable declarations
The lines that are variable declarations are:
1. let carPrice = "10,000";
2. let priceAfterOneYear = "8,543";
3. const priceDifference = carPrice - priceAfterOneYear;
4. const percentageChange = (priceDifference / carPrice) * 100;
5. console.log(`The percentage change is ${percentageChange}`);

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
The expression Number(carPrice.replaceAll(",", "")) is performing two operations:
1. It is using the replaceAll method to remove all commas from the string value of carPrice, resulting in a string that represents a number without any formatting (e.g., "10000").
2. It is then converting that string into a number using the Number() function, so that it can be used in mathematical calculations.
