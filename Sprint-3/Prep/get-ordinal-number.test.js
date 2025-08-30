function getOrdinalNumber (num){
    if (num % 10 === 1) {
      if (num === 11) {
        return "11th";
      } else {
        return `${num}st`;
      }
    } else if (num % 10 === 2) {
      if (num === 12) {
        return "12th";
      } else {
        return `${num}nd`;
      }
    } else if (num % 10 === 3) {
      if (num === 13) {
        return "13th";
      } else {
        return `${num}rd`;
      }
    }
    else { return `${num}th`};
}

test ("works for any number ending in 1 or 2", function () {
    expect (getOrdinalNumber(1)).toEqual("1st");
    expect(getOrdinalNumber(11)).toEqual("11th");
    expect(getOrdinalNumber(41)).toEqual("41st");
    expect(getOrdinalNumber(12)).toEqual("12th");
    expect(getOrdinalNumber(21)).toEqual("21st");
    expect(getOrdinalNumber(652)).toEqual("652nd");
})