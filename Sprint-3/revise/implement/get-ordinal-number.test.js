function getOrdinalNumber(number) {
    const exceptions = [11, 12, 13]; // Special cases for 11th, 12th, 13th
    const lastDigit = number % 10;

    if (exceptions.includes(number % 100)) {
        return number + "th";
    }

    switch (lastDigit) {
        case 1:
            return number + "st";
        case 2:
            return number + "nd";
        case 3:
            return number + "rd";
        default:
            return number + "th";
    }
}

test("converts numbers to ordinal numbers", function () {
    // tests for single digits
    expect(getOrdinalNumber(1)).toBe("1st");
    expect(getOrdinalNumber(2)).toBe("2nd");
    expect(getOrdinalNumber(3)).toBe("3rd");
    expect(getOrdinalNumber(4)).toBe("4th");
    // tests for special case digits
    expect(getOrdinalNumber(11)).toBe("11th");
    expect(getOrdinalNumber(12)).toBe("12th");
    expect(getOrdinalNumber(13)).toBe("13th");
    // tests for double digits
    expect(getOrdinalNumber(21)).toBe("21st");
    expect(getOrdinalNumber(22)).toBe("22nd");
    expect(getOrdinalNumber(23)).toBe("23rd");
    expect(getOrdinalNumber(24)).toBe("24th");
    // tests for more than triple digits
    expect(getOrdinalNumber(101)).toBe("101st");
    expect(getOrdinalNumber(111)).toBe("111th");
    expect(getOrdinalNumber(112)).toBe("112th");
    expect(getOrdinalNumber(113)).toBe("113th");
    expect(getOrdinalNumber(121)).toBe("121st");
    expect(getOrdinalNumber(122)).toBe("122nd");
    expect(getOrdinalNumber(123)).toBe("123rd");
    expect(getOrdinalNumber(200)).toBe("200th");
    expect(getOrdinalNumber(1001)).toBe("1001st");
    expect(getOrdinalNumber(1011)).toBe("1011th");
});

// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
