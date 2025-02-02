const minimum = 1;
const maximum = 100;

// const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//Sam's code
//Checking what each method does invidiually
console.log("Math.random:" + Math.random());
console.log("Math.floor :" + Math.floor(18.6));
//Checking what the method does combined
console.log("Math.floor and Math Random :" + Math.floor(Math.random()));
//Checking the output for num variable
const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
//Prediction :
//First Math.random takes a random number greater than 0 and less than and math.floor will remove if the random has any decimal points and return greatest integer. So the result here will always be 0
//Second (Maximum-Minimum + 1) this calculation will take place second, the result as per the value should be 100
//Third the calculation between first step and second step will take place which results in 0
//Finally, the output will be added with minimum variable, so the answer should be 1
//Testing
console.log(num);
//What actually happened :
//I observed I was incorrect in predicting that the first calculation would be math.floor and math.random when I ran the code :
//The system first took math.random into consideration , did maximum-minimum+1 calculation which is always 100 and multiplied it random number and added it to minimum variable's value 1 and did math.floor last
//My observation : Pay particular attention to where parenthesis are located, this tells us which argument is nested under which, in this exercise all the arguments were nested under math.floor so this argument was processed last
