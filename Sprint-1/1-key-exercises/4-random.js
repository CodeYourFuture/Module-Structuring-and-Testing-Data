const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


console.log(num)

// num returns a value of 60, running it again returns a value of 15, looking at the code I see a .random() function
// I can make a hypothesis that this returns a random number of some kind, hence the inconsistent result

// Let's find out...
// Code in inner-most brackets is evaluated first
// I would expect (maximum - minimum + 1) to be evaluated first (100 - 1 + 1) would equal 100

console.log(maximum - minimum + 1)

// the result was 100
// this part of the code is then multiplied by Math.random()

console.log(Math.random())

// running this code many times, it appears Math.random() returns a random number between 0 and 1
// checking documentation online, this is correct (actually between 0 and 0.99999999999)
// therefore Math.random() * (maximum - minimum + 1) should return a random number between 1 and 100

console.log(Math.random() * (maximum - minimum + 1))

// It does, it returns it with many decimal places, the result of num didn't have any decimal places
// The next part of the code that is run is Math.floor, let's see what this does

const number = Math.random() * (maximum - minimum + 1)
console.log(number)
console.log(Math.floor(number))

// because Math.random() creates a new random number every time it is run, I had to set the
// result to a variable so I can use the same number in multiple functions
// When number is 87.52, Math.floor is 87, when number is 70.02, math.floor is 70
// The function Math.floor appears to be rounding down
// Checking the documentation, this is true, it returns the largest integer <= the given number

// Therefore Math.floor(Math.random() * (maximum - minimum + 1)) must give random numbers between 0 and 99
// The final part is the addition of minimum (+1)

// Therefore I can see this code produces a random whole integer between minimum and maximum
// Which in this case is an integer between 1 and 100