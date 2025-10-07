function repeat(str, count) {
  if (typeof str !== "string" && typeof str !== "number") {
    throw new Error("Input should be a string");
  }
  if (Number(count) < 0) {
    throw new Error("Count should be a positive number");
  }
  if (typeof count !== "number" && typeof count !== "string") {
    throw new Error("Count should be a number");
  }
  return String(str).repeat(Number(count));
}

module.exports = repeat;
