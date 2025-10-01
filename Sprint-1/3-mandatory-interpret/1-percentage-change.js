let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

//there are 5 function calls in this file
//line 4 has 2 function calls - Number and replaceAll
//line 5 has 2 function calls - Number and replaceAll
// line 10 has 1 function call - console.log

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

//The error is coming from line 5 due to a missing comma in the replaceAll method. It should be replaceAll(",","")

// c) Identify all the lines that are variable reassignment statements

// lines 4 and 5

// d) Identify all the lines that are variable declarations

//lines 1, 2, 7 and 8 

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

//This expression is removing all the commas from the carPrice string and converting it into a number so that mathematical operations can be performed on it.