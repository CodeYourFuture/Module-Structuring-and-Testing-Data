const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// 1- In this exercise, you will need to work out what num represents?

// the num gives a random whole number between 1 and 100 like 73, 12, or 100.

// 2- Try breaking down the expression and using documentation to explain what it means
/*

1. Math.random()

Returns a random decimal number between 0 and 1 but never gives 1.0.

Example: 0.24 

2. (maximum - minimum + 1)

This gives number of possible values.

Without the +1, we'd only get the difference, not the full count.

for example:

5 - 1 = 4 → but there are actually 5 numbers: 1, 2, 3, 4, 5

So we add +1 to include both ends of the range.

3. Math.random() * (maximum - minimum + 1)

This gives a random decimal number between 0 and 100 (like 24, 65 ...)

Because we want the random decimal scaled to the size of the range of possible values.

For example, if we want a number between 1 and 100 (inclusive), there are 100 possible numbers (1, 2, ..., 100).

Multiplying by 100 means the decimal is scaled up to cover all those possibilities before rounding.

4. Math.floor(...)

This rounds the decimal down to the nearest whole number.

Example: Math.floor(78.43) → 78

5. + minimum

we add the minimum to shift the range correctly, and make sure the random number up to start from minimum.

5-1- for example if we remove the + minimum 

5-1-1 Math.random() 0.9999 * 99 + 1 → only goes up to 99.999... → max = 99.999... → floor = 100 (but very unlikely) 

now 100 becomes very hard to reach, and in many cases, you never get it.

5-1-2 Math.random() 0.00 * 99 + 1 → only goes up to 0... → max = 0... → floor = 0 (now the minimum is 0, and can appears) 

conclusion : when we don’t add + minimum, there is a chance that 1 appears, but it’s not the guaranteed minimum anymore — 

and the range starts at 0, not 1.

5-2- when we add +minimum 

now we make sure the min and max can appear in the final results and make sure the minimum is 1 not 0. 

Minimum appears when random = 0

Maximum appears when random is almost 1 (like 0.9999...).

example : Math.random() * 99 + 1 → up to 0.99 → max = 99 → floor = 99 → +1 = 100 (so more possibilities for 100 to appears) 

*/

//It will help to think about the order in which expressions are evaluated
//Try logging the value of num and running the program several times to build an idea of what the program is doing
