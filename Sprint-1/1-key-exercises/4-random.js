const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// // This expression returns a random integer in the inclusive range [1, 100]
/*
Breakdown:
- Math.random() returns a number in the range [0, 1)
- (maximum - minimum + 1) calculates how many whole numbers we need (e.g. 100 - 1 + 1 = 100)
- Multiplying by the range produces a number in [0, 100)
- Math.floor(...) returns the largest integer less than or equal to the result (e.g. 78.2 becomes 78)
- Adding minimum (1) shifts it into the correct final range (1–100 inclusive)
*/
/*
Order of evaluation:
1. (maximum - minimum + 1) → calculate the range (e.g., 100 - 1 + 1 = 100)
2. Math.random() → returns a decimal in [0, 1)
3. Multiply by the range → gives a decimal in [0, range)
4. Math.floor(...) → rounds down to the nearest whole number
5. + minimum → shifts the value up so it starts from the minimum value

Final result: a random whole number between minimum and maximum, inclusive.
*/
