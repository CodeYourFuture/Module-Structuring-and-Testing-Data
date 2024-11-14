// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(day) {
    day = String(day);
    let lastChar = day.slice(-1);
    let lastTwoChar = day.slice(-2);
    if (lastTwoChar >= 11 && lastTwoChar < 20){
        return `${day}th`;
    } else if (lastChar == 1) {
        return `${day}st`;
    } else if (lastChar == 2) {
        return `${day}nd`;
    } else if (lastChar == 3) {
        return `${day}rd`;
    } else {
        return `${day}th`;
    }
}
let result = getOrdinalNumber(19);
console.log(result);

test("converts a number to an ordinal number", () => {
    expect(getOrdinalNumber(-2)).toBe("-2nd");
    expect(getOrdinalNumber(0)).toBe("0th");
    expect(getOrdinalNumber(1)).toBe("1st");
    expect(getOrdinalNumber(2)).toBe("2nd");
    expect(getOrdinalNumber(3)).toBe("3rd");
    expect(getOrdinalNumber(7)).toBe("7th");
    expect(getOrdinalNumber(11)).toBe("11th");
    expect(getOrdinalNumber(15)).toBe("15th");
    expect(getOrdinalNumber(21)).toBe("21st");
    expect(getOrdinalNumber(55)).toBe("55th");
    expect(getOrdinalNumber(111)).toBe("111th");
    expect(getOrdinalNumber(5987)).toBe("5987th");
});