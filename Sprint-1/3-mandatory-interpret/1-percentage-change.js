let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
        //there is 1 function call.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
        /*line 5 has a error. The error is occuring because there us a missing comma after the the first double quotations. 
        You can fix the error by just adding the comma.*/

// c) Identify all the lines that are variable reassignment statements
        //line 4 and 5

// d) Identify all the lines that are variable declarations
        //line 1,2,7 and 8.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
        //the expression is removing the ,.
