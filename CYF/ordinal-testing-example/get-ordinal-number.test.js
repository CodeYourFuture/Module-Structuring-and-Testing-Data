function getOrdinalNumber() {
    return "1st";
}

test("converts 1 to an ordinal number", function() {
    expect(getOrdinalNumber(1)).toEqual("1st");
    expect(getOrdinalNumber(11)).toEqual("11th");
    expect(getOrdinalNumber(21)).toEqual("21st");
});