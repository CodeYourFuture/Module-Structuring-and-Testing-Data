function getOrdinalNumber(num) {
  // handle special cases

  if (typeof num !== "number" || Number.isNaN(num)) {
    throw new Error(`Invalid type for ${num}, expected Number`);
  }

  const snum = String(num); // num as a string
  const thList = ["0", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"]; // list of numbers that should end up with th as a suffix

  const lastCharIndex = snum.length - 1;
  const lastOne = snum[lastCharIndex];
  const lastTwo = snum.slice(lastCharIndex - 1);

  if (thList.includes(lastTwo) || thList.includes(lastOne)) {
    return snum + "th";
  }

  switch (lastOne) {
    case "1":
      return snum + "st";
    case "2":
      return snum + "nd";
    case "3":
      return snum + "rd";
    default:
      break;
  }
}

module.exports = getOrdinalNumber;
