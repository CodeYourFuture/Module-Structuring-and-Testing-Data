# Sprint 1 — Mandatory Interpret (Notes)

## 1-percentage-change.js
- What the program does:
- Inputs:
- Output:
- Unfamiliar syntax (with link):
- What I changed / why:


## 2-time-format.js
- What the program does:
- Inputs:
- Output:
- Unfamiliar syntax (with link):
- What I changed / why:

## 3-to-pounds.js
- What the program does:
- Inputs:
- Output:
- Unfamiliar syntax (with link):
- What I changed / why:


## 1-percentage-change.js

### a) How many function calls are there?
There are 5 function calls:
- Number(carPrice.replaceAll(",", ""))
- carPrice.replaceAll(",", "")
- Number(priceAfterOneYear.replaceAll(",", ""))
- priceAfterOneYear.replaceAll(",", "")
- console.log(...)

---

### b) Where did the error occur and why?
The error occurred on the line:
priceAfterOneYear = Number(priceAfterOneYear.replaceAll("," ""));

The replaceAll function was missing a comma between its arguments. The correct syntax requires two arguments: replaceAll(search, replacement).

Fix:
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

---

### c) Variable reassignment statements
- carPrice = Number(carPrice.replaceAll(",", ""))
- priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""))

---

### d) Variable declarations
- let carPrice = "10,000"
- let priceAfterOneYear = "8,543"
- const priceDifference = carPrice - priceAfterOneYear
- const percentageChange = (priceDifference / carPrice) * 100

---

### e) What does Number(carPrice.replaceAll(",", "")) do?
First, replaceAll(",", "") removes commas from the string "10,000", producing "10000".
Then, Number(...) converts the string "10000" into the numeric value 10000.
This ensures arithmetic operations can be performed correctly.



## 2-time-format.js

### a) How many variable declarations?
There are 6 variable declarations:
- movieLength
- remainingSeconds
- totalMinutes
- remainingMinutes
- totalHours
- result

---

### b) How many function calls?
There is 1 function call:
- console.log(result)

---

### c) What does movieLength % 60 represent?
The % operator returns the remainder after division.
movieLength % 60 gives the number of seconds left after converting full minutes.
In this example, it returns 24 seconds.

---

### d) Interpret line 4 (totalMinutes)
const totalMinutes = (movieLength - remainingSeconds) / 60;

This subtracts the leftover seconds from the total seconds and divides by 60.
The result is the total number of full minutes in the movie.

---

### e) What does result represent? Better name?
The variable result represents the formatted movie duration in hours:minutes:seconds.
A better name could be:
- formattedTime
- movieDuration
- durationString

---

### f) Will this work for all values of movieLength?
Yes, it works for any positive number of seconds.
However, if movieLength is negative, a decimal, or not a number, the result would be incorrect.
Also, minutes and seconds are not padded with leading zeros, so values like 2:3:5 may appear instead of 02:03:05.




## 3-to-pounds.js

1) `const penceString = "399p";`
- Declares a string containing a price in pence, with a trailing `p` character.

2) `const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);`
- Takes a substring from index 0 up to (but not including) the last character.
- Purpose: remove the trailing `"p"`.
- For `"399p"`, this becomes `"399"`.

3) `const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");`
- Pads the string on the left until it is at least length 3, using `"0"`.
- Purpose: make sure we always have enough digits to represent pounds + pence.
- Example: `"5"` becomes `"005"`, `"50"` becomes `"050"`, `"399"` stays `"399"`.

4) `const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);`
- Takes everything except the last 2 digits.
- Purpose: the part before the last 2 digits is the pounds.
- For `"399"`, length is 3, so substring(0, 1) → `"3"`.

5) `const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");`
- First, `substring(length - 2)` takes the last 2 digits.
- Then `padEnd(2, "0")` ensures it’s at least 2 characters (adds zeros on the right if needed).
- Purpose: get exactly two pence digits.
- For `"399"`, last two digits are `"99"` → stays `"99"`.

6) `console.log(\`£${pounds}.${pence}\`);`
- Uses a template literal to format the final currency string as pounds and pence.
- For pounds `"3"` and pence `"99"` → outputs `£3.99`.

### Unfamiliar syntax (docs)
- substring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
- padStart: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
- padEnd: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
- template literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals