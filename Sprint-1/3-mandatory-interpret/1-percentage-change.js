let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
        // 2 functions calls are there . Line 4 and 5 Number function.

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
        //Error at Line 5. There are is cause of missing (,) in replace method . It can be fixed by putting (,) between arguments  at replace method() 

// c) Identify all the lines that are variable reassignment statements
        // Line 4 & 5

// d) Identify all the lines that are variable declarations
         // Line 1,2,7 & 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
         // Removing the (,) in carPrice string and changing to number in order to get number value. 
