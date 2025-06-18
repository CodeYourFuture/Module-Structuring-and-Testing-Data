const isValidPassword = require("./password-validator");

// CASE 1: Password should be at least 5 characters long
// testing a password that isn't long enough
test("password needs at least 5 characters", () => {
    const password = "1234";
    const result = isValidPassword(password);
    expect(result).toEqual(false);
}
);

// CASE 2: Password should contain at least one English uppercase letter (A-Z)
// testing a password that doesn't have any uppercase letters
test("password needs at least one uppercase letter", () => {
    expect(isValidPassword("abcdef")).toEqual(false);
})


// CASE 3: Password must contain at least one English lowercase letter (a-z)
test("password needs at least one lowercase letter", () => {
    expect(isValidPassword("ABCDEF")).toEqual(false);
})

// CASE 4: Password must contain at least one number (0-9)
test("password needs at least one number", () => {
    expect(isValidPassword("abcDEF")).toEqual(false);
})

// CASE 5: Password must have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
test("password needs at least one of these special characters: ! # $ % . * &", () => {
    expect(isValidPassword("abcDEF42")).toEqual(false);
})

// CASE 6: Must not be any previous password in the passwords array
test("password can't be a password that has been used previously", () => {
    expect(()=>isValidPassword("Be&n56969")).toThrow();
})

// CASE 7: Password follows all the rules
test("password needs at least one of these special characters: ! # $ % . * &", () => {
    expect(isValidPassword("abcDEF42!")).toEqual(true);
})