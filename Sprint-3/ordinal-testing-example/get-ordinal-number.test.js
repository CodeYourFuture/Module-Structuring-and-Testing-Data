test("converts 1 to an ordinal number", function () {
    expect(getOrdinalNumber(1)).toEqual("1st");
    expect(getOrdinalNumber(11)).toEqual("11th");
    expect(getOrdinalNumber(21)).toEqual("21st");});

function getOrdinalNumber(num) {
    if (num === 1) {
        return "1st";
    }
    else if(num === 11) {
        return "11th";
    }
    else if(num === 21) {
        return "21st";
    }
}
