function getOrdinalNumber(num){
  const lastTwoDigits = num % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 13){
    return num+ "th";
  }
  
  const lastDigits = num %10;

  switch (lastDigit){
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
    default:
      return num + "th";
  }
}

module.exports = getOrdinalNumber;
