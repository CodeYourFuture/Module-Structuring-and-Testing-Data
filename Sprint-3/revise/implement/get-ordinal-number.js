// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

function getOrdinalNumber(number) {
  const suffixes = ["th", "st", "nd", "rd"];
  const suffixIndex = number % 10;

  if (suffixIndex === 1 && number !== 11) {
    return number + "st";
  } else if (suffixIndex === 2 && number !== 12) {
    return number + "nd";
  } else if (suffixIndex === 3 && number !== 13) {
    return number + "rd";
  } else {
    return number + "th";
  }
}
module.exports = getOrdinalNumber;

//const input = 1;
//const input = 4;
//4 as an ordinal number will be 4th
//const input = 12;
//12 as an ordinal number will be 12th





