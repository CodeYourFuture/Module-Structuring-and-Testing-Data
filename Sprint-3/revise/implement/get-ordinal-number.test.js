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
    expect(getOrdinalNumber(1)).toBe("1st");
    expect(getOrdinalNumber(2)).toBe("2nd");
    expect(getOrdinalNumber(3)).toBe("3rd");
    expect(getOrdinalNumber(4)).toBe("4th");
    expect(getOrdinalNumber(11)).toBe("11th");
    expect(getOrdinalNumber(12)).toBe("12th");
    expect(getOrdinalNumber(13)).toBe("13th");
    expect(getOrdinalNumber(21)).toBe("21st");
    expect(getOrdinalNumber(22)).toBe("22nd");
    expect(getOrdinalNumber(23)).toBe("23rd");
    expect(getOrdinalNumber(24)).toBe("24th");
});

// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
