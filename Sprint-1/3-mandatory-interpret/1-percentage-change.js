let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
   //There are 5 function calls in this file. They are:
   // 1, Line 4:
   //carPrice.replaceAll(",", "") → Calls the replaceAll() method on the carPrice string
   //Number(...) → Converts the result to a number using the Number() function

   // 2, Line 5: 
   //priceAfterOneYear.replaceAll(",", "") → Calls the replaceAll() method on priceAfterOneYear
   //Number(...) → Converts the result to a number using the Number() function
   // 3, Line 10:
   //console.log(...) → Calls the log() function to print to the console
   //Total: 5 function calls
// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
   // The error occurs on the Line 5 :
   //priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
   //because the replaceAll() method is missing a comma between its two arguments. It should be:
   //priceAfterOneYear.replaceAll(",", "")
   //The fix is to add the comma between the arguments to make it syntactically correct.
// c) Identify all the lines that are variable reassignment statements
   //The variables carPrice and priceAfterOneYear are reassigned on lines 4 and 5:
   //carPrice = Number(carPrice.replaceAll(",", ""));
   //priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
   //These lines update the existing variables by converting their string values (with commas) into numbers without commas.
// d) Identify all the lines that are variable declarations
    //The variable declarations happen on the following lines:

    //Line 1: let carPrice = "10,000";

    //Line 2: let priceAfterOneYear = "8,543";

    //Line 7: const priceDifference = carPrice - priceAfterOneYear;

    //Line 8: const percentageChange = (priceDifference / carPrice) * 100;

    //So, there are 4 variable declarations in total.

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    //The expression Number(carPrice.replaceAll(",", "")) performs two tasks:
    // 1, carPrice.replaceAll(",", ""): This removes all commas from the carPrice string. 
    // For example, if carPrice = "10,000", this part of the expression turns it into "10000".
    // 2, Number(...): This then converts the cleaned string "10000" into a number: 10000.
    // This expression is used to convert a string that looks like a number with commas (like "10,000") into an actual number (10000) so that it can be used in mathematical calculations.


