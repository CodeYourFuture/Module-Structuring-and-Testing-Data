let carPrice = "10,000";
let priceAfterOneYear = "8,543";
 
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//    5 functions are  called in  Line 4,5 and 8 

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
 // SyntaxError: missing ) after argument list is  Missing comma between arguments

// c) Identify all the lines that are variable reassignment statements
     // Line 4 :carPrice = Number(carPrice.replaceAll(",", ""));
    //  Line 5:priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

// d) Identify all the lines that are variable declarations
    //    Line 1: let carPrice = "10,000";
    //    Line 2: let priceAfterOneYear = "8,543";
    //    Line 7: const priceDifference = carPrice - priceAfterOneYear;
    //    Line 8: const percentageChange = (priceDifference / carPrice) * 100;



// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// removes all commas from the string "10,000", making it "10000". and Number(...): converts the resulting string "10000" to a number type 10000.
// so the purpose is to  convert a comma-formatted string into a usable numeric value for mathematical operation.