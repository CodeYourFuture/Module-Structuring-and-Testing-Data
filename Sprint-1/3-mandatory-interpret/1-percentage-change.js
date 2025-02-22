let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

   // a) 4 function calls
    // -replaceAll(",","")(twice)
     //-Number(...)(twice)

   // b) its coming from line 5 priceAfterOneYear
    // - SyntaxError: missing ) after argument list
     //- by adding the missing comma 
     //- priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

   // c) Line 4 & Line 5
      
   // d) Line 1 & 2
      //Line 7 & 8

   // e) To convert a price string (formatted with commas) into a number, making it usable for calculations  