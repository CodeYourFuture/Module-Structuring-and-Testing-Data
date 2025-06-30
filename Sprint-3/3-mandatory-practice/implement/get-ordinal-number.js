function getOrdinalNumber(num) {
  if (typeof num !== "number" || !Number.isInteger(num)) {
    throw new Error("Input must be an integer.");
  }

  const suffixes = ["th", "st", "nd", "rd"];
  const remainder = num % 100;

  return (
    num +
    (suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0])
  );
}

module.exports = getOrdinalNumber;
