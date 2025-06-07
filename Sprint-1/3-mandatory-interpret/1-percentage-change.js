let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
    //1.replaceAll -- Line 4 and Line 5
    //2.number -- Line 4 and Line 5
    //3.Console.Log -- Line 10
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
   //The error is in the line 5. one comma is missing.

// c) Identify all the lines that are variable reassignment statements
    //Reassignment exists in line 4 and line 5. 
    //When declaration variables in line 1 and line 2 the values are assigned in string format. Reassignment changes format of values to number.

// d) Identify all the lines that are variable declarations
    //Line 1 : carPrice
    //line 2 : priceAfterOneYear
    //line 7 : priceDifference
    //line 8 : percentageChange

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//in this expression, the purpose is converting format to number and removing commas in the string. It is needed to make mathematical calculation.
