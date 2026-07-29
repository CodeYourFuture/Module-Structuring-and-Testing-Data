const cardNumber = 4533787178994213;
const last4Digits = String(cardNumber).slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

//Prediction: I believe the code won't work because the slice method is incorrect. The slice method is used for strings.
//Error: TypeError: cardNumber.slice is not a function
//Needed to add "" to make it a string.
//if not possible, I can change make the last4Digits = String(cardNumber).slice(-4); 
// to make last4Digits to convert cardNumber into a string

