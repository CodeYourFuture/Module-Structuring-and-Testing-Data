const cardNumber = 4533787178994213;
const last4Digits = cardNumber.toString().slice(-4);

// The last4Digits variable should store the last 4 digits of cardNumber
// However, the code isn't working
// Before running the code, make and explain a prediction about why the code won't work
// Then run the code and see what error it gives.
// Consider: Why does it give this error? Is this what I predicted? If not, what's different?
// Then try updating the expression last4Digits is assigned to, in order to get the correct value



/*   ERROR DEBUGGING

console.log(`I was born in ${cityOfBirth}`);
const cityOfBirth = "Bolton";

                My Prediction:
The .slice() method is commonly used on **strings** and **arrays** to extract parts of them.
Here, `cardNumber` is a **number**, not a string.
Since `.slice()` is not a method available on numbers, calling `cardNumber.slice(-4)` will cause an error.

So, I predict the code will throw a TypeError like:
    → TypeError: cardNumber.slice is not a function

                What I Got:
→ TypeError: cardNumber.slice is not a function

Explanation:
- The `.slice()` method works only on **strings** and **arrays**, not on numbers.
- JavaScript does **not automatically** convert numbers to strings for method calls.
- Therefore, trying to call `.slice()` on a number results in a **runtime error**.

*/
