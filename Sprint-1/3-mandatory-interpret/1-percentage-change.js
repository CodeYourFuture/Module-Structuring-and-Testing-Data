let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
/* there are 5 function calls in this code.
    1) Number(carPrice.replaceAll(",","")); line 4.
    2) Number(priceAfterOneYear.replace("," "")) line 5.
    3) carPrice.replaceAll(",", "") line 4.
    4) priceAfterOneYear.replaceAll("," "") line 5.
    5) console.log(`The percentage change is ${percentageChange}`);  line 10. */ 

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
//the error is coming from line 5 and the error is missing between the arguments.

// c) Identify all the lines that are variable reassignment statements
/*on line 4- carPrice = Number(carPrice.replaceAll(",", ""));  
  on line 5- priceAfterOneYear = Number(priceAfterOneYear.replaceAll(","), "")*/

// d) Identify all the lines that are variable declarations
/* line 1- let carPrice = "10,000";  
   line 2- let priceAfterOneYear = "8,543";
   line 7- const priceDifference = carPrice - priceAfterOneYear;
   line 8- const percentageChange = (priceDifference / carPrice) * 100;*/

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/* the expression doing changing the value of "10,000" to "10000" because comma count as part of a character after that 
    changing the string variable type to number variable type. */
