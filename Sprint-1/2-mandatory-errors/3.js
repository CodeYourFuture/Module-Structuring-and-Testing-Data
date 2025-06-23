//const cardNumber = 4533787178994213;
//const last4Digits = cardNumber.slice(-4);

/*Instructions */

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

/* My answers:

1. My prediction on why the code isn't working is that it isn't being called or declared. Right now const stores the numbers but there is no console.log() to show the output

2. After running it shows "TypeError: cardNumber.slice is not a function"

3. 💔 Ah I see, my prediction was partially correct that it would not work but my reason and logic were wrong. What's different is that slice() only works on strings or arrays, not numbers. So to fix this, I. have to convert the number to a string first so I can slice it. See below a solution below:

*/

const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);
console.log(last4Digits); // expected to output "4213"