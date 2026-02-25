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