function getOrdinalNumber(num) {
  if (num < 1) {
    throw new Error("Only integer numbers,bigger than 0");
  }
  let lastDigit = num.toString().slice(-1);
  let digitBeforeLast = num.toString().slice(-2, -1);

  if (lastDigit === "1" && digitBeforeLast !== "1") {
    return num + "st";
  } else if (lastDigit === "2" && digitBeforeLast !== "1") {
    return num + "nd";
  } else if (lastDigit === "3" && digitBeforeLast !== "1") {
    return num + "rd";
  }
  return num + "th";
}

module.exports = getOrdinalNumber;
