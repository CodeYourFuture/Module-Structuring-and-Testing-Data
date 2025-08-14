const cardValidator = require("./card-validator");

test("card number has 16 digits" , () => {

   const cardNumber = "3467854322366667"; 

   const result = cardValidator(cardNumber);

   expect(result).toBe(true);

});

test("card number contain numbers : NO letters allowed" , () => {
    const cardNumber = "1234a77787h88833";
    const result = cardValidator(cardNumber);
    expect(result).toBe(false);
});

test("card number has the same number : invalid card digits" , () => {
    const cardNumber = "1111111111111111";
    const result = cardValidator(cardNumber);
    expect(result).toBe(false);
});

test("card sum is less than 16 digits: invalid card digits" , () => {
    const cardNumber ="1111111111111110";
    const result = cardValidator(cardNumber);
    expect(result).toBe(false);
});

test("card number ends with odd number: invalid card number" , () => {
    const cardNumber = "2222222222243791";
    const result = cardValidator(cardNumber);
    expect(result).toBe(true);
});
