const passwordValidator = require("./passwordValidator");

test("Expect false when password is too short", () => {
    expect(passwordValidator("A1!")).toBe(false);
});

test("Expect false when password has no uppercase letter", () => {
    expect(passwordValidator("password1!")).toBe(false);
});

test("Expect false when password has no lowercase letter", () => {
    expect(passwordValidator("PASSWORD1!")).toBe(false);
});

test("Expect false when password has no number", () => {
    expect(passwordValidator("Password!")).toBe(false);
});

test("Expect false when password has no special character", () => {
    expect(passwordValidator("Password1")).toBe(false);
});

test("Expect false when password is in the blacklist", () => {
    expect(passwordValidator("previousPassword1")).toBe(false);
    expect(passwordValidator("anotherOldPassword")).toBe(false);
});

// ✅ Clear valid case to ensure special symbols are not the issue
test("Expect true for a valid password", () => {
    expect(passwordValidator("Valid1!")).toBe(true);
    expect(passwordValidator("S3cureP@ss")).toBe(true);
});
