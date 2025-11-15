let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
    // 5 function calls: Number(),replaceAll(),Number(),replaceAll(),console.log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
   //line 5, there was no "," between arguments

// c) Identify all the lines that are variable reassignment statements
   //line4,line5

// d) Identify all the lines that are variable declarations
   //line1,line2,line7,line8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
   //it replaces "," from the carPrice with an empty string, basically deleting the commas, and then turning the string "10000" 
   // in to a number 10000
