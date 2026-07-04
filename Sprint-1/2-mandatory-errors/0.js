This is just an instruction for the first activity - but it is just for human consumption
We don't want the computer to run these 2 lines - how can we solve this problem?

//The error message displayed by Node.js is:
//Uncaught SyntaxError: Unexpected identifier 'is'
//This is a syntax error. It occurs because JavaScript is trying to interpret an
//English sentence as JavaScript code. After reading the word 'This', the JavaScript
//parser expects a valid JavaScript operator. Instead, it encounters another variable
//name, 'is', which is not valid in that position according to JavaScript's syntax rules.
//As a result, the parser throws the error Unexpected identifier 'is'.