function getOrdinalNumber(num) {
  const s = ["th", "st", "nd", "rd"];
    const lastDigits = num % 100;
    // Uses the index 1, 2, or 3 for st/nd/rd, defaults to 0 (th)
    return num + (s[(lastDigits - 20) % 10] || s[lastDigits] || s[0]);
}

module.exports = getOrdinalNumber;
