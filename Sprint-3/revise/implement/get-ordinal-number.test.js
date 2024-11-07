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
});
