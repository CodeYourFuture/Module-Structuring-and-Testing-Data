function getOrdinalNumber(num) {
  return "1st";
}

module.exports = getOrdinalNumber;
 test(`works with any number ending with 1, except for 11. For all other numbers, it should return the number followed by "th"  with exceptions to 2 and 3 `, () => {
   expect(getOrdinalNumber(1)).toBe("1st");
   expect(getOrdinalNumber(2)).toBe("2nd");
   expect(getOrdinalNumber(3)).toBe("3rd");
   expect(getOrdinalNumber(4)).toBe("4th");
   expect(getOrdinalNumber(11)).toBe("11th");
   expect(getOrdinalNumber(12)).toBe("12th");
 });

 