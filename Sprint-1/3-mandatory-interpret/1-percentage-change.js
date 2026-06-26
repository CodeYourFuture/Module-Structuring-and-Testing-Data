let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
    // there are 5 function calls in this file. including methods used , 2 methods  = replaceAll(), methods are called under their object, replaceAll() is called under the string object.
    // The lines where a function call is made are:
    // Line 4: carPrice.replaceAll(",", "")
    // Line 5: priceAfterOneYear.replaceAll(",", "")
    // Line 7: console.log(`The percentage change is ${percentageChange}`)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    //syntaxError: missing ) after argument list, - 
    //the error is occurring because of a missing "," in the replaceAll() method. in line 5.

// c) Identify all the lines that are variable reassignment statements
    // The lines that are variable reassignment statements are:
    // Line 4: carPrice = Number(carPrice.replaceAll(",", ""));
    // Line 5: priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

// d) Identify all the lines that are variable declarations
    // The lines that are variable declarations are:
    // Line 1: let carPrice = "10,000";
    // Line 2: let priceAfterOneYear = "8,543";
    // Line 7: const priceDifference = carPrice - priceAfterOneYear;
    // Line 8: const percentageChange = (priceDifference / carPrice) * 100;

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    // The expression Number(carPrice.replaceAll(",","")) is converting the string value of carPrice into a number by removing the comma from the string.
