const cardNumber = 4533787178994213;
const last4Digits = cardNumber .toString().slice(-4);
console.log(last4Digits);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

I exepected first that the .slice negative value (-4) will count from the beganning and drob of the first four Numbers. 
When I run the code the error was that the cardNumber is not a function, 
so I thought that I might need to turn the code into a function, 
but when I checked an AI toolbar it showed that .slice is a methode that is used for string and array ,
 so the card number should turned into a string by add .tostring after the card number and then use the .slice method to get the last 4 last4Digits.