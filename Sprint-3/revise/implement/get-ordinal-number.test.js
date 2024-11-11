const getOrdinalNumber = require("./get-ordinal-number"); // Adjust the path if necessary

describe("getOrdinalNumber", () => {
  it('should return "1st" for 1', () => {
    expect(getOrdinalNumber(1)).toBe("1st");
  });

  it('should return "2nd" for 2', () => {
    expect(getOrdinalNumber(2)).toBe("2nd");
  });

  it('should return "3rd" for 3', () => {
    expect(getOrdinalNumber(3)).toBe("3rd");
  });

  it('should return "4th" for 4', () => {
    expect(getOrdinalNumber(4)).toBe("4th");
  });

  it('should return "11th" for 11', () => {
    expect(getOrdinalNumber(11)).toBe("11th");
  });

  it('should return "21st" for 21', () => {
    expect(getOrdinalNumber(21)).toBe("21st");
  });

  it('should return "22nd" for 22', () => {
    expect(getOrdinalNumber(22)).toBe("22nd");
  });

  it('should return "101st" for 101', () => {
    expect(getOrdinalNumber(101)).toBe("101st");
  });

  it('should return "Invalid input" for negative numbers', () => {
    expect(getOrdinalNumber(-5)).toBe("Invalid input");
  });

  it('should return "Invalid input" for non-integer numbers', () => {
    expect(getOrdinalNumber(10.5)).toBe("Invalid input");
  });

  it('should return "Invalid input" for non-number inputs', () => {
    expect(getOrdinalNumber("Hello")).toBe("Invalid input");
  });

  it('should return "111th" for 111', () => {
    expect(getOrdinalNumber(111)).toBe("111th"); // 111 is a special case and should return "th"
  });

  it('should return "213th" for 213', () => {
    expect(getOrdinalNumber(213)).toBe("213th"); // 213 ends in 13, so it should be "th"
  });

  it('should return "1012th" for 1012', () => {
    expect(getOrdinalNumber(1012)).toBe("1012th"); // 1012 ends in 12, so it should be "th"
  });
});

// testing 111, 1012, 213? (Special cases)
