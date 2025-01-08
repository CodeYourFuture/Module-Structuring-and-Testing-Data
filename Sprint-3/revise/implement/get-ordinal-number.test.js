// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
function getOrdinalNumber(num) {
    // If number is 0 or negative, return number with no changes
    if (num <= 0){
        return `${num}`;
    }
    // Array of suffixes for ordinal numbers indexes[0,1,2,3]
    const suffixes = ["th", "st", "nd", "rd"];  // Array holding ordinal suffixes for numbers

    // Check special cases (11th, 12th, 13th). In these special cases ordinal number will be with th suffix
    const value = num % 100;
    if (value >= 11 && value <= 13) {
        return `${num}th`;
    }
    // Now after checking exception, this expression determines number based on the last digit [num %10].
    // `suffixes[num % 10]` show the proper suffix in the array. For example if num % 10 = 0 so suffixes[0] = "th", 
    //  if num % 10 = 1 so suffixes[1] = "st" , num % 10 = 4 so suffixes[4] = it will be undefined because it isn't in the array
    // so with `|| suffixes[0]` we will be sure function return the default "th"
    return `${num}${suffixes[num % 10] || suffixes[0]}`; // Concatenate the number with the correct suffix
}


///<<< Test with jest syntax >>>///

test("1 should return 1st", () => {
    expect(getOrdinalNumber(1)).toBe("1st");
});

test("2 should return 2nd", () => {
    expect(getOrdinalNumber(2)).toBe("2nd");
});

test("3 should return 3rd", () => {
    expect(getOrdinalNumber(3)).toBe("3rd");
});

test("4 should return 4th", () => {
    expect(getOrdinalNumber(4)).toBe("4th");
});

test("should return '11th' for 11", () => {
    expect(getOrdinalNumber(11)).toBe("11th");
});

test("should return '12th' for 12", () => {
    expect(getOrdinalNumber(12)).toBe("12th");
});

test("should return '13th' for 13", () => {
    expect(getOrdinalNumber(13)).toBe("13th");
});

test("should return '21st' for 21", () => {
    expect(getOrdinalNumber(21)).toBe("21st");
});

test("should return '22nd' for 22", () => {
    expect(getOrdinalNumber(22)).toBe("22nd");
});

test("should return '23rd' for 23", () => {
    expect(getOrdinalNumber(23)).toBe("23rd");
});

  test("should return '211th' for 211", () => {
    expect(getOrdinalNumber(211)).toBe("211th");
  });

  test("should return '112th' for 112", () => {
    expect(getOrdinalNumber(112)).toBe("112th");
  });

  test("should return '421st' for 421", () => {
    expect(getOrdinalNumber(421)).toBe("421st");
  });

  test("should return '155th' for 155", () => {
    expect(getOrdinalNumber(155)).toBe("155th");
  });