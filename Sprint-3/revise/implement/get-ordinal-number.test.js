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
  expect(getOrdinalNumber(1)).toEqual("1st");
  expect(getOrdinalNumber(11)).toEqual("11th");
  expect(getOrdinalNumber(21)).toEqual("21st");
});

test("works for any number ending in 2", function () {
  expect(getOrdinalNumber(2)).toEqual("2nd");
  expect(getOrdinalNumber(12)).toEqual("12th");
  expect(getOrdinalNumber(22)).toEqual("22nd");
});

test("works for any number ending in 3", function () {
  expect(getOrdinalNumber(3)).toEqual("3rd");
  expect(getOrdinalNumber(13)).toEqual("13th");
  expect(getOrdinalNumber(23)).toEqual("23rd");
});

test("works for any number ending in 4", function () {
  expect(getOrdinalNumber(4)).toEqual("4th");
  expect(getOrdinalNumber(14)).toEqual("14th");
  expect(getOrdinalNumber(24)).toEqual("24th");
});

// from 4 to 20, all numbers should end in "th"
