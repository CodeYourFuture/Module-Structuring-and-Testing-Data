let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//ANS:There are 6 function calls in total.
carPrice.replaceAll(",", "")(Line 4)
Number(...)(Line 4)
priceAfterOneYear.replaceAll("," "")(Line 5)
Number(...)(Line 5)
console.log(...)(Line 10)
percentageChange inside the template literal(the engine calls a string conversion here).
    // b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    //ANS: error here -> priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
    //FIX:
    priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
// c) Identify all the lines that are variable reassignment statements
//ANS:
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
// d) Identify all the lines that are variable declarations
//ANS:
let carPrice = "10,000";
let priceAfterOneYear = "8,543";
const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;
// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//ANS:
//This expression is performing Data Cleaning and Type Conversion.
carPrice.replaceAll(",", "") // This finds every comma in the string "10,000" and removes it, resulting in the string "10000".

Number(...) //This takes that cleaned string and converts it into an actual Number data type.

//The Purpose: Computers cannot perform mathematical calculations(like division or subtraction) on strings that contain formatting characters like commas.
