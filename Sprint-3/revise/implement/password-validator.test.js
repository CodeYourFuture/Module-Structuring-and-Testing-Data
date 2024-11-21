const passwords = ["7wnuT$bH", "!uTd4*M", "456Ww^8"];

function checkPassword(pass) {
    if (pass.length < 5) {
        return false;
    } else if (!/[0-9]/.test(pass)) {
        return false;
    } else if (!/[A-Z]/.test(pass)) {
        return false;
    } else if (!/[a-z]/.test(pass)) {
        return false;
    } else if (!/[!#$%.&*]/.test(pass)) {
        return false;
    } else if (passwords.includes(pass)) {
        return false;
    }
    return true;
}

let userPassword = checkPassword("te^A");
// console.log(userPassword);

// jest tests 
test("check password", () => {
    expect(checkPassword("te^")).toBe(false);
    expect(checkPassword("tyi@EQ")).toBe(false);
    expect(checkPassword("te^yd5")).toBe(false);
    expect(checkPassword("HIF3&8")).toBe(false);
    expect(checkPassword("te$sucRYm")).toBe(false);
    expect(checkPassword("te^")).toBe(false);
    expect(checkPassword("teRTIN4")).toBe(false);
    expect(checkPassword("te*YV87")).toBe(true);
    expect(checkPassword("!uTd4*M")).toBe(false);
})