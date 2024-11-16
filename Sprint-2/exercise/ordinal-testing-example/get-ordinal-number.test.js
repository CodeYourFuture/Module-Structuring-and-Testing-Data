function getOrdinalNumber(num) {
    // Special cases for numbers ending in 11, 12, 13
    if (num % 100 === 11 || num % 100 === 12 || num % 100 === 13) {
        return num + "th";
    }
    
    // Get the last digit
    const lastDigit = num % 10;
    
    switch (lastDigit) {
        case 1:
            return num + "st";
        case 2:
            return num + "nd";
        case 3:
            return num + "rd";
        default:
            return num + "th";
    }
}
test("works for any number ending in 1", function() {
    expect(getOrdinalNumber(2)).toBe("2nd");
    expect(getOrdinalNumber(3)).toBe("3rd");
    expect(getOrdinalNumber(4)).toBe("4th");
    expect(getOrdinalNumber(11)).toBe("11th");
    expect(getOrdinalNumber(12)).toBe("12th");
    expect(getOrdinalNumber(13)).toBe("13th");
    expect(getOrdinalNumber(21)).toBe("21st");
    expect(getOrdinalNumber(22)).toBe("22nd");
    expect(getOrdinalNumber(23)).toBe("23rd");
    expect(getOrdinalNumber(100)).toBe("100th");
  });