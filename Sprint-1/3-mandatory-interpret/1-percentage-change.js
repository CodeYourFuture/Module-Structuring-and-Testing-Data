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

// answers for the questions above:

// a) There are 3 function calls in this file. The function calls are on the following lines:
//    - Number(carPrice.replaceAll(",", ""))
//    - Number(priceAfterOneYear.replaceAll(",", ""))
//    - console.log(`The percentage change is ${percentageChange}`);

// b) The error comes from Line 5 and line 1:
//    - line 1: 1st carPrice = "10,000";
//    - JavaScript cannot perform accurate math operations on strings that contain commas
//    - priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
//    - Why is it occurring? It throws a SyntaxError: Unexpected string. This happens because a comma is missing between the two arguments passed into the .replaceAll() method. JavaScript sees "," "" and doesn't know how to interpret two strings jammed together without a separator.
//    - How to fix it: Add a comma between the arguments just like you did on Line 4.

// c) The variable reassignment statements are on the following lines:
//    - Line 4: carPrice = Number(carPrice.replaceAll(",", ""));
//    - Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// d) The variable declarations are on the following lines:
//    - Line 1: let carPrice = "10,000";
//    - Line 2: let priceAfterOneYear = "8,543";
//    - Line 7: const priceDifference = carPrice - priceAfterOneYear;
//    - Line 8: const percentageChange = (priceDifference / carPrice) * 100;

// e) The expression Number(carPrice.replaceAll(",","")) is doing the following:
//    - carPrice.replaceAll(",", ""): It takes the original string "10,000", finds all the commas, and replaces them with an empty string (""). 
//    -This strips the formatting and turns the string into "10000".
//    - Number(...): It takes that clean string "10000" and type-casts (converts) it into an actual primitive number data type: 10000.

