let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
    //  There are 5 function calls.
    //-In Line 4, Number(), and carPrice.replaceAll(",", "") 
    //-In line 5 same like above
    //-In line 10 console.log is a method function call 

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    //In line 5 there is an error because there is no separation(comma) between two arguments
    // Can be fixed by placing a comma for separation between two arguments  priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",",""));

    // c) Identify all the lines that are variable reassignment statements
    // 4th and 5th lines

// d) Identify all the lines that are variable declarations
 // In line 1,2,7 and 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
 // It helps a string to be converted into a number to be used by removing the Commas