const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this code, the variable num represents a random whole number between 1 and 100, including both 1 and 100.
/*
Breakdown:
- Math.random() gives a number from 0 (inclusive) to 1 (exclusive), like 0.57
- (maximum - minimum + 1) calculates how many whole numbers we need (e.g. 100 - 1 + 1 = 100)
- Multiplying the random decimal by the range gives a number from 0 up to just below 100
- Math.floor(...) turns that into a whole number (e.g. 78.2 becomes 78)
- Adding minimum (1) shifts it into the correct final range (1–100 inclusive)
*/
/*
Order of evaluation:
1. (maximum - minimum + 1) → calculate the range (e.g., 100 - 1 + 1 = 100)
2. Math.random() → returns a decimal from 0 up to (but not including) 1
3. Multiply the random decimal by the range → gives a decimal between 0 and range
4. Math.floor(...) → rounds down to the nearest whole number
5. + minimum → shifts the value up so it starts from the minimum value

Final result: a random whole number between minimum and maximum, inclusive.
*/
