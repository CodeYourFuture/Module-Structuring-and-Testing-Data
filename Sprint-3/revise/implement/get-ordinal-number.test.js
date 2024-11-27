// In this week's prep, we started implementing getOrdinalNumber
// https://programming.codeyourfuture.io/structuring-data/sprints/3/prep/

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(digits) {
  //handle the edge cases of 11, 12, 13
  if (digits === 11 || digits === 12 || digits === 13) {
    return `${digits}th`;
  }
  const lastDigit = digits % 10;
  if (lastDigit === 1) {
    return `${digits}st`;
  }
  if (lastDigit === 2) {
    return `${digits}nd`;
  }
  if (lastDigit === 3) {
    return `${digits}rd`;
  }
  return `${digits}th`;
}

test("works for any number ending in 1", function () {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(21)).toBe("21st");
});

test("works for any number ending in 2", function () {
  expect(getOrdinalNumber(2)).toBe("2nd");
  expect(getOrdinalNumber(12)).toBe("12th");
  expect(getOrdinalNumber(22)).toBe("22nd");
});

test("works for any number ending in 3", function () {
  expect(getOrdinalNumber(3)).toBe("3rd");
  expect(getOrdinalNumber(13)).toBe("13th");
  expect(getOrdinalNumber(23)).toBe("23rd");
});

test("works for any number ending in 4", function () {
  expect(getOrdinalNumber(4)).toBe("4th");
  expect(getOrdinalNumber(14)).toBe("14th");
  expect(getOrdinalNumber(24)).toBe("24th");
});

// from 4 to 20, all numbers should end in "th"
