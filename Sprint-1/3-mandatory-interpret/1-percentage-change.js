let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ,""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?

// c) Identify all the lines that are variable reassignment statements

// d) Identify all the lines that are variable declarations

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?


/* SOLUTION


a) **How many function calls are there in this file? Write down all the lines where a function call is made**  
There are **5 function calls**:
1. `carPrice.replaceAll(",", "")`  
2. `Number(carPrice.replaceAll(",", ""))`  
3. `priceAfterOneYear.replaceAll("," "")` (should be `replaceAll(",", "")`)  
4. `Number(priceAfterOneYear.replaceAll("," ""))` (should be `replaceAll(",", "")`)  
5. `console.log(...)`

**Lines with function calls:**  
- `carPrice = Number(carPrice.replaceAll(",", ""));`  
- `priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));`  
- `console.log(...)`

b) **Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?**  
The error is on this line:  
```javascript
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));
```
There is a syntax error: `replaceAll("," "")` is missing a comma between the arguments.  
**Fix:**  
```javascript
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));
```

c) **Identify all the lines that are variable reassignment statements**  
- `carPrice = Number(carPrice.replaceAll(",", ""));`
- `priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));`

d) **Identify all the lines that are variable declarations**  
- `let carPrice = "10,000";`
- `let priceAfterOneYear = "8,543";`
- `const priceDifference = carPrice - priceAfterOneYear;`
- `const percentageChange = (priceDifference / carPrice) * 100;`

e) **Describe what the expression `Number(carPrice.replaceAll(",", ""))` is doing - what is the purpose of this expression?**  
It removes all commas from the `carPrice` string (e.g., turns `"10,000"` into `"10000"`), then converts the result to a number (`10000`). 
This allows for mathematical operations on the price.



*/
