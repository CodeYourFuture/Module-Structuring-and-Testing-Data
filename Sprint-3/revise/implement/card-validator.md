## **PROJECT: Credit Card Validator**

In this project you'll write a script that validates whether or not a credit card number is valid.

Here are the rules for a valid number:

- Number must be 16 digits, all of them must be numbers.
- You must have at least two different digits represented (all of the digits cannot be the same).
- The final digit must be even.
- The sum of all the digits must be greater than 16.

For example, the following credit card numbers are valid:

```markdown
9999777788880000
6666666666661666
```

And the following credit card numbers are invalid:

```markdown
a92332119c011112 (invalid characters)
4444444444444444 (only one type of number)
1111111111111110 (sum less than 16)
6666666666666661 (odd final number)
```

These are the requirements your project needs to fulfill:

- Make a JavaScript file with a name that describes its contents.
- Create a function with a descriptive name which makes it clear what the function does. The function should take one argument, the credit card number to validate.
- Write at least 2 comments that explain to others what a line of code is meant to do.
- Return a boolean from the function to indicate whether the credit card number is valid.

Good luck!




//.....Answer......

const validateCreditCard = (cardNumber) => {
   
    if (cardNumber.length !== 16) 
        return false; 

    // Check if the card number contains only digits 
    for (let i = 0; i < cardNumber.length; i++) {
        if (cardNumber[i] < '0' || cardNumber[i] > '9') 
            return false;  
    }

    // Check if there are at least two different digits
    let hasDifferentDigits = false;
    for (let i = 0; i < cardNumber.length; i++) {
        for (let j = i + 1; j < cardNumber.length; j++) {
            if (cardNumber[i] !== cardNumber[j]) {
                hasDifferentDigits = true;
                break;
            }
        }
        if (hasDifferentDigits) break;
    }
    if (!hasDifferentDigits) 
        return false; // Invalid: All digits are the same
    

    // Check if the last digit is even
    const lastDigit = cardNumber[cardNumber.length - 1];
    if (lastDigit % 2 !== 0) 
        return false; 

    // Check if the sum of the digits is greater than 16
    let sum = 0;
    for (let i = 0; i < cardNumber.length; i++)
        sum += +cardNumber[i]; 
    
    if (sum <= 16) 
    return false; 
    return true;
};

