const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value

/* my prediction about why the code isn't working is because either the new variable is declared with const keyword
or the value of the variable cardNumber is a number not a string whereas the method .slice works only with strings */
// the error it gives 'cardNumber.slice is not a function'
// It gives this error because the computer assumes the coder is trying to invoke a function
// yes it is my second prediction
// updating the expression last4Digits is assigned to, in order to get the correct value is as follows
// method one: puting the value of the variable cardNumber into quotes
// method two: invoking the method .toString() to convert the type of the variable from number to string
