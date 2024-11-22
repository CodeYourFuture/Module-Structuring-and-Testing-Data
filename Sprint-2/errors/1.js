// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  //const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

//let decimalNumber = 0.1;

//console.log(convertToPercentage(decimalNumber));
console.log(convertToPercentage(0.1));


/* My prediction:

There should be an error in line 13, because 
the variable decimalNumber is not defined anywhere 
and is not declared in the global context. 
This variable is a parameter 
of the function convertToPercentage(), 
which apparently was intended to convert 
a decimal number to a percentage. For example: 
0.1 is 10%, 0.05 is 5%, and 0.0025 is 0.25%

Theory:
To fix the issue, I see 3 solutions:
1. Declare decimalNumber as a global variable or constant 
and remove it as a parameter 
of the function convertToPercentage(), i.e. this function 
with this approach should be parameterless.

2. In line 13, should call the function by explicitly 
specifying a decimal number instead of an undeclared 
or undeclared variable

3. Declare decimalNumber as a global variable or constant 
and in line 13 call the convertToPercentage(decimalNumber) function. 
In many programming languages ​​that have implicit type casting, 
you can set the same identifiers for the global and local contexts. 
When compiling, the identifiers are converted to their internal 
identifiers, thereby avoiding the identifier overriding error. 
A good example, I'm interested in how this works in JS. 
But I want to note that I am not a supporter of this practice, 
I prefer to assign different identifiers so that my code is working 
and does not depend on the current features of the compiler 
and interpreter.


Test results:

1. Confirmation that it is better to pay attention to one thing. I did not notice the line during the code review:
const decimalNumber = 0.5;
I commented it out and continue to test my theories

2. It turned out that all the theories were correct 
and the tests confirmed this.

I feel a little embarrassed that I did not notice an obvious 
and fundamental error lying on the surface.
 */
