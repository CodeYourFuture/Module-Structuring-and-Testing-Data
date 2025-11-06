
function getOrdinalNumber(num) {
  const remainder10 = num % 10;
  const remainder100 = num % 100;

  if (remainder100 >= 11 && remainder100 <= 13) {
    return `${num}th`;
  }

  switch (remainder10) {
    case 1:
      return `${num}st`;
    case 2:
      return `${num}nd`;
    case 3:
      return `${num}rd`;
    default:
      return `${num}th`;
  }
}

module.exports = getOrdinalNumber;


const getOrdinalNumber = require("./getOrdinalNumber");

describe("getOrdinalNumber()", () => {
  test("should return '1st' for 1", () => {
    expect(getOrdinalNumber(1)).toBe("1st");
  });

  test("should return '2nd' for 2", () => {
    expect(getOrdinalNumber(2)).toBe("2nd");
  });

  test("should return '3rd' for 3", () => {
    expect(getOrdinalNumber(3)).toBe("3rd");
  });

  test("should return '4th' for 4", () => {
    expect(getOrdinalNumber(4)).toBe("4th");
  });

  test("should return '11th', '12th', '13th' for special cases", () => {
    expect(getOrdinalNumber(11)).toBe("11th");
    expect(getOrdinalNumber(12)).toBe("12th");
    expect(getOrdinalNumber(13)).toBe("13th");
  });

  test("should return correct suffixes for 21, 22, 23", () => {
    expect(getOrdinalNumber(21)).toBe("21st");
    expect(getOrdinalNumber(22)).toBe("22nd");
    expect(getOrdinalNumber(23)).toBe("23rd");
  });

  test("should return '111th' for numbers ending with 11, 12, 13 even if larger", () => {
    expect(getOrdinalNumber(111)).toBe("111th");
    expect(getOrdinalNumber(112)).toBe("112th");
    expect(getOrdinalNumber(113)).toBe("113th");
  });
});
