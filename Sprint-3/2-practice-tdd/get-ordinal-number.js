function getOrdinalNumber(num) {
  let numberString = String(num);
  lastTwoCharactersNumberString = numberString.slice(-2);
  lastCharacterNumberString = numberString.slice(-1);
  if(lastTwoCharactersNumberString === "11")
    return num+ "th";
  else if(lastCharacterNumberString === "1")
    return num+ "st";
  else if(lastCharacterNumberString === "2")
    return num+"nd";
  else if(lastCharacterNumberString === "3")
    return num + "rd";
  else
    return num + "th";
}

module.exports = getOrdinalNumber;