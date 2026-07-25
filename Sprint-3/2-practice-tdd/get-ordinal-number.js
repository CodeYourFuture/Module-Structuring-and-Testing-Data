function getOrdinalNumber(num) {
  if ([11, 12, 13].includes(num % 100)) {
    return num + "th";
  }
  if (String(num).at(-1) === "1") {
    return num + "st";
  }
  if (String(num).at(-1) === "2") {
    return num + "nd";
  }
  if (String(num).at(-1) === "3") {
    return num + "rd";
  } else {
    return num + "th";
  }
}

module.exports = getOrdinalNumber;
