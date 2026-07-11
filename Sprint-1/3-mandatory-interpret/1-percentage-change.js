let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

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

a) How many function calls are there?

There are 5 function calls. 

1. carPrice.replaceAll(",", "")
2. Number(......)
3. priceAfterOneYear.replaceAll(",", "")
4.  Number(......)
5. console.log(.....)

b) Why is the error occurring? 

Because of the missing comma in the function call ReplaceAll() on line 5

c) Variable reassignments

1. carPrice = Number(carPrice.replaceAll(",", ""));
2. priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

d) all the variable declarations

1. let carPrice = "10,000";
2. let priceAfterOneYear = "8,543";
3. const priceDifference = carPrice - priceAfterOneYear;
4. const percentageChange = (priceDifference / carPrice) * 100;


e)What is the expression doing?

The replaceAll() removes commas from the string and Number() function call converts the string to a number.

The expression removes the commas from the price string and converts the result into a number so it can be used in mathematical calculations.


*/