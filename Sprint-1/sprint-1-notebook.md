# Sprint 1: Interactive Notebook

> > [!tip]
> >
> > You should always do the prep work before attempting the coursework. The prep shows you how to do the coursework. There is often a step by step video you can code along with too. Do the prep.
>
> **Prep Work Link:** [https://programming.codeyourfuture.io/structuring-data/sprints/1/prep/](https://programming.codeyourfuture.io/structuring-data/sprints/1/prep/ "null")

**Key Documentation**

- **Main JavaScript Guide:** [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript "null")
- **JavaScript Errors Guide:** [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors "null")

## Part 1: Key Exercises

> In this section, you'll have a short program and task. Some of the syntax may be unfamiliar - in this case, you'll need to look things up in documentation.

### 1. Count

**Goal:** Describe what `count = count + 1;` is doing.

```js
let count = 0;

// This line reassigns the 'count' variable. It evaluates the right side first (0 + 1 = 1)
// and then assigns that result back into the count variable.
count = count + 1;

console.log(count);

```

### 2. Initials

**Goal:** Declare a variable called `initials` that stores the first character of each string.

```js
let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Strings can be treated like arrays. We get the character at index 0 of each string.
let initials = `${firstName[0]}${middleName[0]}${lastName[0]}`;

console.log(initials);

```

### 3. Paths

**Goal:** Create variables to store the `dir` and `ext` parts of the `filePath`.

```js
const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/");
const base = filePath.slice(lastSlashIndex + 1);

// The directory is the part of the string from the beginning up to the last slash.
const dir = filePath.slice(0, lastSlashIndex);
// The extension is the part of the base from the last dot to the end.
const ext = base.slice(base.lastIndexOf("."));

console.log(`The base is: ${base}`);
console.log(`The directory is: ${dir}`);
console.log(`The extension is: ${ext}`);

```

### 4. Random

**Goal:** Work out what `num` represents by breaking down the expression.

```js
const minimum = 1;
const maximum = 100;

// This expression generates a random integer between the minimum and maximum values.
// Math.random() -> 0-0.999...
// _ (range) -> scales it
// + minimum -> shifts it
// Math.floor() -> rounds down to a whole number
const num = Math.floor(Math.random() _ (maximum - minimum + 1)) + minimum;

console.log(`The random number is: ${num}`);

```

## Part 2: Mandatory Errors

> Your task is to interpret the error message and explain why it occurs. The [errors documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors "null") will help you figure out the solution.

### 1. Comments (`0.js`)

**Goal:** Prevent the computer from running instructive lines.

**Broken Code (Causes `SyntaxError`):**

```js
This is just an instruction for the first activity

```

**Corrected Code:**

```js
// This is just an instruction for the first activity - but it is just for human consumption
// We don't want the computer to run these 2 lines - how can we solve this problem?
console.log("This code runs because the lines above are comments.");

```

**Explanation:** JavaScript throws a `SyntaxError` because it cannot parse plain text. Using `//` at the start of a line turns it into a comment, which the JavaScript engine ignores.

### 2. Const Reassignment (`1.js`)

**Goal:** Create an age variable and then reassign it.

**Broken Code (Causes `TypeError`):**

```js
const age = 33;
age = age + 1;

```

**Corrected Code:**

```js
let age = 33;
age = age + 1;
console.log(age);

```

**Explanation:** The original code throws a `TypeError: Assignment to constant variable.` because variables declared with `const` are read-only and cannot be reassigned. Changing `const` to `let` fixes this, as `let` allows reassignment.

### 3. Temporal Dead Zone (`2.js`)

**Goal:** Print the string "I was born in Bolton".

**Broken Code (Causes `ReferenceError`):**

```js
console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

```

**Corrected Code:**

```js
const cityOfBirth = "Bolton";
console.log(`I was born in ${cityOfBirth}`);

```

**Explanation:** The original code throws a `ReferenceError: Cannot access 'cityOfBirth' before initialization`. Variables must be declared before they are used. Moving the declaration before the `console.log` solves the issue.

### 4. `slice` on a Number (`3.js`)

**Goal:** Store the last 4 digits of `cardNumber`.

**Broken Code (Causes `TypeError`):**

```js
const cardNumber = 4533787178994213;
const last4Digits = cardNumber.slice(-4);

```

**Corrected Code:**

```js
const cardNumber = 4533787178994213;
// Convert the number to a string first, so .slice() can be used.
const last4Digits = String(cardNumber).slice(-4);
console.log(last4Digits);

```

**Explanation:** The `.slice()` method is a function for strings, not numbers. The original code throws a `TypeError: cardNumber.slice is not a function`. Converting `cardNumber` to a string allows `.slice()` to work correctly.

### 5. Invalid Variable Names (`4.js`)

**Goal:** Create time variables.

**Broken Code (Causes `SyntaxError`):**

```js
const 12HourClockTime = "20:53";
const 24hourClockTime = "08:53";

```

**Corrected Code:**

```js
const twelveHourClockTime = "20:53";
const twentyFourHourClockTime = "08:53";
console.log(twelveHourClockTime);
console.log(twentyFourHourClockTime);

```

**Explanation:** Variable names in JavaScript cannot start with a number. The original code throws a `SyntaxError: Invalid or unexpected token`. The variable names must be changed to be valid identifiers.

## Part 3: Mandatory Interpret

> You must use documentation to make sense of anything unfamiliar - learning how to look things up this way is a fundamental part of being a developer! You can also use `console.log` to check the value of different variables in the code.

### 1. Percentage Change

```js
let carPrice = "10,000";
let priceAfterOneYear = "8,543";

// Note: The original file has a syntax error. `replaceAll("," "")` should be `replaceAll(",", "")`
carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) \* 100;

console.log(`The percentage change is ${percentageChange}`);

```

**Answer these questions in your own words:**

- a) How many function calls are there in this file?
- b) The original file had an error. Why did it occur and how was it fixed?
- c) Identify the two lines that are variable reassignment statements.
- d) Identify the two lines that are variable declarations.
- e) Describe what the expression `Number(carPrice.replaceAll(",", ""))` is doing.

### 2. Time Format

```js
const movieLength = 8784; // length of movie in seconds

// The modulo operator (%) gives the remainder of a division.
const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const formattedTime = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(formattedTime);

```

**Answer these questions in your own words:**

- a) How many variable declarations are there in this program?
- c) Explain what the expression `movieLength % 60` represents.
- d) Interpret line 4 (`totalMinutes = ...`), what does this expression mean?
- e) What does the `formattedTime` variable represent? Is it a good name?

### 3. To Pounds

```js
const penceString = "399p";

// 1. Remove the trailing "p" to get just the number string.
const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
console.log(`Step 1: ${penceStringWithoutTrailingP}`);

// 2. Pad the start with "0"s to ensure it's at least 3 digits long (for prices < £1).
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
console.log(`Step 2: ${paddedPenceNumberString}`);

// 3. Extract the pounds part (all digits except the last two).
const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
console.log(`Step 3: ${pounds}`);

// 4. Extract the pence part (the last two digits).
const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
console.log(`Step 4: ${pence}`);

// 5. Combine into the final formatted string.
console.log(`Final Result: £${pounds}.${pence}`);

```

**Task:**

- Follow the `console.log` statements to understand the step-by-step breakdown of how the price is formatted.

## Part 4: Stretch & Explore

> This stretch activity will get you to start exploring new concepts and environments by yourself.

### 1. Chrome Console

**Instructions:**

- Open a new window in Chrome, then locate the **Console** tab (usually in Developer Tools, `Ctrl+Shift+I` or `Cmd+Opt+I`).
- In the Chrome console, type the following and press Enter.

```js
// NOTE: This code must be run in the browser's console, not here in Node.js
alert("Hello world!");

```

- Now try invoking the `prompt` function in the browser console.

```js
// NOTE: This code must be run in the browser's console.
let myName = prompt("What is your name?");
console.log(myName); // See what value was stored

```

**Reflection Questions:**

- What effect does calling the `alert` function have?
- What effect does calling the `prompt` function have?
- What is the return value of `prompt`?

### 2. Objects

**Instructions:**

- Open the Chrome devtools Console.
- Type `console.log` and then hit enter.
- Now enter just `console` in the Console and expand the object that appears.
- Try also entering `typeof console`.

**Reflection Questions:**

- What does `console` store?
- What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?