let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));


const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;


console.log(`The percentage change is ${percentageChange}`);


/*
    Read the code and then answer the questions below

    a) How many function calls are there in this file? Write down all the lines where a function call is made

        --------  Number(carPrice.replaceAll(",", "")); this convert string in numbers
        --------  replaceAll(",", "") this function is removing the "," and returning just the numbers
        --------  console.log(`The percentage change is ${percentageChange}`); this is a function to print what we call inside.



    b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

        -------  In the line 5 we were missing the "," dividing the ("," "") this gave an error.


    c) Identify all the lines that are variable reassignment statements

        -------  carPrice = Number(carPrice.replaceAll(",", ""));
        -------  priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));  


    d) Identify all the lines that are variable declarations

        -------  let carPrice = "10,000";
        -------  let priceAfterOneYear = "8,543"; 
        -------  const priceDifference = carPrice - priceAfterOneYear;
        -------  const percentageChange = (priceDifference / carPrice) * 100;

    e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

        -------  The expression Number(carPrice.replaceAll(",", "")) performs two actions:
            * carPrice.replaceAll(",", ""):
                The replaceAll() method is used on the string carPrice. It removes all commas "," from the 
                string by replacing them with an empty string "".

            * Number(...);
                this function is then called on the result of replaceAll(),
                converting the string now without commas into a numeric value eg 10,000 => 10000


*/