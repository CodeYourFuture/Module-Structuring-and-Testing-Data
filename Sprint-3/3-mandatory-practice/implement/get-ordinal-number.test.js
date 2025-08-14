// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '1st' for 1", () => {
    expect(getOrdinalNumber(1)).toEqual("1st");
    });


    function getOrdinalNumber(num) {
        // Handle special cases for 11, 12, and 13
        if (num % 100 >= 11 && num % 100 <= 13) return `${num}th`;
      
        // Determine the suffix based on the last digit
        const lastDigit = num % 10;
        switch (lastDigit) {
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
      