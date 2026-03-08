function getOrdinalNumber(num) {
  const numStr = num.toString();
  const numLength = numStr.length;
  if (numStr[numLength - 2] === "1" && numStr[numLength - 1] === "1") {
    return num + "th";
  } else if (numStr[numLength - 1] === "1") {
    return num + "st";
  } else if (numStr[numLength - 2] === "1" && numStr[numLength - 1] === "3") {
    return num + "th";
  } else if (numStr[numLength - 1] === "3") {
    return num + "rd";
  } else if (numStr[numLength - 1] === "2") {
    return num + "nd";
  } else {
    return num + "th";
  }
}

module.exports = getOrdinalNumber;
