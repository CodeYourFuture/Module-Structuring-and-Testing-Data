const getOrdinalNumber = require("./get-ordinal-number");
test("should return '1st' for 1", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
});


module.exports = getOrdinalNumber;