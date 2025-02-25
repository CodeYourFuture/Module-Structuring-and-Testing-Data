const creditCardValidation = require("./credit-card");

test(" this should return true if card number is 16 digits long", () => {
    expect(creditCardValidation(1234567890123456)).toBe(true);
})

test("this should return false if card number is not 16 digits long", () => {
    expect(creditCardValidation(123456789012345)).toBe(false);
})

test("this should return false if card number contains letters", () => {
    expect(creditCardValidation("1233404fjkdks")).toBe(false);

})

test("this should return false for an empty string", () => {
    expect(creditCardValidation("")).toBe(false);
})




