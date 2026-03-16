function getOrdinalNumber(num) {
  let remainder1 = num % 10;
  let remainder2 = num % 100;
  if (remainder1 === 1 && remainder2 !== 11) {
    // we also can use if (num[-1]===1 && num.slice(-2)!==11)
    return num + "st";
  } else if (remainder1 === 2 && remainder2 !== 12) {
    // we also can use if (num[-1]===2 && num.slice(-2)!==12)
    return num + "nd";
  } else if (remainder1 === 3 && remainder2 !== 13) {
    // we also can use if (num[-1]===3 && num.slice(-2)!==13)
    return num + "rd";
  } else {
    return num + "th";
  }
}

module.exports = getOrdinalNumber;
