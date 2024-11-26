let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

    // There are 5 function calls:
    // line 4 :
    //         replaceAll()
    //         Number()
    // line 5 :
    //         replaceAll()
    //         Number()
    // line 10 :
    //         log()

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

    // There was a syntax error of missing comma between two arguments for the replaceAll(). Solved with adding a comma between "," and ""

// c) Identify all the lines that are variable reassignment statements

    // line 4 : carPrice
    // line 5 : priceAfterOneYear

// d) Identify all the lines that are variable declarations

    // line 1 : let --> carPrice 
    // line 2 : let -->  priceAfterOneYear
    // line 7 : const --> priceDifference
    // line 8 : const --> percentageChange

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

    // It gets value of carPrice, replace commas (",") with nothing ("") and then converts it to number.

    // carPrice.replaceAll((",","")) : "10,000" --replacing commas with nothing--> "10000"
    // Number(...) : "10000" --converting to number--> 10000
