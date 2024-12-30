// get-ordinal-number.js
function getOrdinalNumber(num) {
  if (typeof num !== "number" || !Number.isInteger(num)) {
    throw new Error("Input must be an integer.");
  }

  const suffixes = ["th", "st", "nd", "rd"];
  const v = num % 100;

  if (v >= 11 && v <= 13) {
    return num + "th";
  }

  return num + (suffixes[num % 10] || "th");
}
module.exports = getOrdinalNumber;
