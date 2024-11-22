
// Predict and explain first...

// this function should square any number but instead we're going to get an error

function square(num) {
    return num * num;
}


console.log(`square for 2 is ${square(2)}`);
console.log(`square for 3 is ${square(3)}`);
console.log(`square for 4 is ${square(4)}`);


/* My predictions:

I hope everything is simple and obvious here. 
Somehow, the exercises went from complex to simple, 
usually the other way around.

Here the error will be due to the fact that 
the identifier of the square() function parameter 
is set as "3", and the identifier cannot start with a digit, 
although it can contain them. Further in the context 
we have an undefined and undeclared identifier num in neither 
the global nor the local context.

Theory:
To avoid errors and fix the code so that it meets our requirements, 
we need to set the identifier name num 
to the square() function parameter
 
Test results:
The theory was confirmed and no new errors were found
*/

