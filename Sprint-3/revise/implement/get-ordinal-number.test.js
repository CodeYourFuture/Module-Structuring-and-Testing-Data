// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(num) {
    // Handle cases for 11, 12, and 13
    if (num % 100 >= 11 && num % 100 <= 13) {
      return num + 'th';
    }
  
    // Other cases
    switch (num % 10) {
      case 1:
        return num + 'st';
      case 2:
        return num + 'nd';
      case 3:
        return num + 'rd';
      default:
        return num + 'th';
    }
  }
  
  test("works for numbers ending in 1, 2, 3 and 4", () => {
    expect(getOrdinalNumber(1)).toBe("1st");
    expect(getOrdinalNumber(11)).toBe("11th");
    expect(getOrdinalNumber(21)).toBe("21st");
    expect(getOrdinalNumber(2)).toBe("2nd");
    expect(getOrdinalNumber(12)).toBe("12th");
    expect(getOrdinalNumber(22)).toBe("22nd");
    expect(getOrdinalNumber(3)).toBe("3rd");
    expect(getOrdinalNumber(13)).toBe("13th");
    expect(getOrdinalNumber(23)).toBe("23rd");
    expect(getOrdinalNumber(4)).toBe("4th");
    expect(getOrdinalNumber(14)).toBe("14th");
  });
  