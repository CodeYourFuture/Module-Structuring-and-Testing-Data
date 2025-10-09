function repeat(str, count) {
  if (typeof str !== "string" && typeof str !== "number") {
    throw new Error("Input should be a string");
  }
  if (Number(count) < 0 && Number.isInteger(Number(count))) {
    throw new Error("Count should be a positive integer number");
  }
  if (typeof count !== "number" && typeof count !== "string") {
    throw new Error("Count should be a positive integer number");
  }
  return String(str).repeat(Number(count));
}

module.exports = repeat;
