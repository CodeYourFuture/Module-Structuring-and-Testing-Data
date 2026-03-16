function getOrdinalNumber(num) {
  let lastDigit = num % 10;
  let lastTwoDigits = num % 100;
  if (lastDigit === 1 && lastTwoDigits !== 11) {
    // we also can use if (num[-1]===1 && num.slice(-2)!==11)
    return num + "st";
  } else if (lastDigit === 2 && lastTwoDigits !== 12) {
    // we also can use if (num[-1]===2 && num.slice(-2)!==12)
    return num + "nd";
  } else if (lastDigit === 3 && lastTwoDigits !== 13) {
    // we also can use if (num[-1]===3 && num.slice(-2)!==13)
    return num + "rd";
  } else {
    return num + "th";
  }
}

module.exports = getOrdinalNumber;
