let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));

priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));  // added comma to separate args of replaceAll

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
        // on line 4, two function calls are made
        // on line 5, two function calls are made
        //on line 10, one function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
        // SyntaxError: missing ) after argument list, points to priceAfterOneYear.replaceAll("," ""));
        // on line 6, there was a comma missing in between the arguments of replaceAll

// c) Identify all the lines that are variable reassignment statements
        // lines 4 and 6 are variable reassignment statements

// d) Identify all the lines that are variable declarations
        // lines 1, 2, 8 and 9 are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
        //replaceAll(a,b) looks for instances of a and replaces them with b
        //on line 4, this means that any commas in the carPrice string will be removed
        //this is so the type of carPrice can be successfully converted to a number
