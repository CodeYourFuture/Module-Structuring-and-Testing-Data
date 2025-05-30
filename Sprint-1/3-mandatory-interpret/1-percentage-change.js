let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
    //  5 function calls: 
        //  ln 4: Number(), and .replaceAll(), although .replaceAll() would be better described as a method call. (2 function calls)
        //  ln 5: same as ln 4 (2 function calls)
        //  ln 10: Technically, console.log() is a method call/function call (1 function call)

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
    //  Error come from ln 5. The error is happening because there are 2 arguments that aren't separated in the replaceAll call.
    //  The error can be fixed by placing a comma between the arguments. priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

// c) Identify all the lines that are variable reassignment statements
    // ln 4 and 5

// d) Identify all the lines that are variable declarations
    //  ln 1,2,7 and 8

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
    // The expression is taking the variable carPrice, which is a string, and removing the comma. It does this by replacing the comma with "". The string is then converted to a number.