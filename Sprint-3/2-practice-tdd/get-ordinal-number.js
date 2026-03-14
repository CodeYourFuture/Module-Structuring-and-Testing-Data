function getOrdinalNumber(num) {
  if (num % 10 === 1 && num % 100 !== 11) {
    // we also can use if (num[-1]===1 && num.slice(-2)!==11)
    return num + "st";
  } else if (num % 10 === 2 && num % 100 !== 12) {
    // we also can use if (num[-1]===2 && num.slice(-2)!==12)
    return num + "nd";
  } else if (num % 10 === 3 && num % 100 !== 13) {
    // we also can use if (num[-1]===3 && num.slice(-2)!==13)
    return num + "rd";
  } else {
    return num + "th";
  }
}

module.exports = getOrdinalNumber;
