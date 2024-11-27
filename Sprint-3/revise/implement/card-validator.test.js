
const cardValidator = require("./cardValidator");


test("Checks if the number is 16 digits and all are numbers, at least two different digits are represented adn the sum of all digits is greater than 16", () => {
    const currentOUtput = cardValidator("1243578569873476");
    const targetOutput = true;

    expect(currentOUtput).toEqual(targetOutput)
});

test("Checks if the final digit is even", () => {
    const currentOUtput = cardValidator("1243578569873479");
    const targetOutput = false;

    expect(currentOUtput).toEqual(targetOutput)
});