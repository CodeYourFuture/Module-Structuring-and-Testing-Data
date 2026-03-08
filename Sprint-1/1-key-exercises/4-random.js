const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// when first evaluating the full num expression i got the answer 99
// The second time i got 50 (which means .floor and .random are doing something to change the value of the expression each run)

// The order of operations is as follows:

// 1. The expression inside the parentheses is evaluated first: (maximum - minimum + 1) which gives us 100 - 1 + 1 = 100
// 2. Then Math.random() is called, which generates a random decimal number the range [0, 1).
// 3. The result of Math.random() is multiplied by the result of step 1, giving us a random decimal number in the range [0, 100).
// 4. Math.floor() is then called on the result of step 3, which rounds it down to the nearest integer, 
//    resulting in a value from the set {0, 1, ..., 99\}
// 5. Finally, the minimum value (1) is added to the result of step 4, giving us a random integer in the range [1, 100].

// When num = 99
// math.random gives us 0.98 (or something close to it)
// 0.98 * 100 = 98
// math.floor(98) = 98
// 98 + 1 = 99

// When num = 50
// math.random gives us 0.49 (or something close to it)
// 0.49 * 100 = 49
// math.floor(49) = 49
// 49 + 1 = 50
