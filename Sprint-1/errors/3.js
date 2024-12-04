//const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.toString[0].slice(-4);
 

// The last4Digits variable should store the last 4 digits of the card number
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, to get the correct value

Prediction:
//The code won't work because there was no console.log to show our output.

//Actual error when the code is run: "Cannot read properties of undefined (reading 'slice')"

//I think it was giving us an error because we did not give slice something to work with. We should have given the slice an array or a string to get the correct output;

var cardNumber = ["4533787178994213"];
const last4Digits = cardNumber[0].slice(-4);
console.log(last4Digits);
